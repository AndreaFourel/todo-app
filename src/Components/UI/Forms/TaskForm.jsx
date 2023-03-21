import { useContext, useState } from "react";
import TextField from "./TextField";
import TextareaField from "./TextareaField";
import Button from "../Button/Button";
import { TasksContext } from "../../../Contexts/TasksContext";

const TaskForm = ({ closeModal, value, index }) => {

  const [ formValue, setFormValue ] = useState(value ? value :{
    title : '',
    description: '',
  });

  const [ invalidFields, setInvalidFields] = useState([]);

  const { addTask, editTask } = useContext(TasksContext);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (invalidFields.length > 0) {
      alert ('There are errors in the form');
      return;
    }

    if(value && !isNaN(+index)) { // S'il y a une valeur en props => Modification
      editTask({ task: formValue, taskIndex: index });
    } else { //sinon création d'une nouvelle tache
      addTask({ 
        ...formValue,
        createdAt: new Date(),
        isDone: false,
       });
    }
    
    //Fermer la modale
     closeModal();
  }

  const handleError = (error) => { //içi on récupère { name, error }
    const invalidFieldsCopy = [...invalidFields];
    //on récupère l'index d'un eventuel champ invalid eregitré dans le tableau
    const invalidFieldIndex = invalidFieldsCopy.findIndex(field => field === error.name);

    if(error.error) { // si une erreur est renvoyée (si dans le champ error il y a une  erreur)

      if (invalidFieldIndex === -1) {//si le champs n'est pas enregistré comme invalide, on l'ajoute au tableau
        setInvalidFields([...invalidFieldsCopy, error.name]);
      }
      // sinon, il est déja enregitré, on ne fait rien

    } else {// si aucune error n'est renvoyée
      
      if (invalidFieldIndex !== -1){ //mais que le champ est enregistré comme invalide, on le supprime du tableau
        invalidFieldsCopy.splice(invalidFieldIndex, 1);
        setInvalidFields(invalidFieldsCopy);
      }
      //si le champs n'est pas enregistré, on ne fait rien
    }
    
  }

   return (
    <form onSubmit = { handleSubmit }>
      <TextField 
        name='Title'
        placeholder='New task title'
        label='Title'
        value={ formValue.title }
        onChange={ (value) => setFormValue({...formValue, title: value})}
        validation={ {
          required : true,
          type: 'string',
          minLength: 2,
          maxLength: 25,
        } }
        onError={ handleError }
      />
      <TextareaField 
        name='Description'
        placeholder='Write your description here'
        label='Description'
        value={ formValue.description }
        onChange={ (value) => setFormValue({...formValue, description: value})}
        validation={ {
          required: false,
          type: 'string',
          maxLength: 100,
        } }
        onError={ handleError }
      />
      <Button type="submit">
        Save
      </Button>
    </form>
   );
}

export default TaskForm;