import { useContext, useState } from "react";
import Button from "../../Components/UI/Button/Button"
import PageTitle from "../../Components/UI/PageTitle/PageTitle";
import Modal from "../UI/Modal/Modal";
import style from './Tasks.module.css';
import TaskForm from "../UI/Forms/TaskForm";
import TasksTable from "./TasksTable/TasksTable";
import { TasksContext } from "../../Contexts/TasksContext";


const Tasks = () => {

  const [ isNewTaskModalOpen, setIsNewModalOpen ] = useState(false);

  const { tasksData } = useContext(TasksContext);

  return (
    <>
      <div className={style['task-header']}>
        <PageTitle count={ tasksData.count } title={`Task ${tasksData.count > 1 ? 's' : ''}`} />
        <Button onClick={ () => setIsNewModalOpen(true) }>New Task</Button>
      </div>
      <TasksTable />
      <Modal isOpen={ isNewTaskModalOpen } setIsOpen={ setIsNewModalOpen }> 
        <TaskForm closeModal={ () => setIsNewModalOpen(false) }/>
      </Modal>
    
    </>

  );
}

export default Tasks;