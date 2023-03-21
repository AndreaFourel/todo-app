import { useContext } from "react";
import { TasksContext } from "../../../Contexts/TasksContext";
import TaskRow from "./TaskRow";
import style from './TasksTable.module.css';

const TasksTable = () => {

  const { tasksData } = useContext(TasksContext);

  return(
    <div className={ style['tasks-table-container'] }>
      <table className={ style['tasks-table'] }>
        <thead>
          <th>Status</th>
          <th>Title</th>
          <th>Description</th>
          <th>Created at</th>
          <th>Time</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {
            tasksData && tasksData.tasks && tasksData.tasks.map((task, index) => (
              <TaskRow key={ Date.parse(task.createdAt) - index} task={task} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default TasksTable;