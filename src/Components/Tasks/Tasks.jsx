import Button from "../../Components/UI/Button/Button"
import PageTitle from "../../Components/UI/PageTitle/PageTitle";
import style from './Tasks.module.css';


const Tasks = () => {

  return (
    <div className={style['task-header']}>
      <PageTitle count={ 0 } title='Task' />
      <Button>New Task</Button>
    </div>
  );
}

export default Tasks;