import { useState } from "react";
import Button from "../../Components/UI/Button/Button"
import PageTitle from "../../Components/UI/PageTitle/PageTitle";
import Modal from "../UI/Modal/Modal";
import style from './Tasks.module.css';
import TaskForm from "../UI/Forms/TaskForm";


const Tasks = () => {

  const [ isNewTaskModalOpen, setIsNewModalOpen ] = useState(false);

  return (
    <>
      <div className={style['task-header']}>
        <PageTitle count={ 0 } title='Task' />
        <Button onClick={ () => setIsNewModalOpen(true) }>New Task</Button>
      </div>
      <Modal isOpen={ isNewTaskModalOpen } setIsOpen={ setIsNewModalOpen }> 
        <TaskForm />
      </Modal>
    
    </>

  );
}

export default Tasks;