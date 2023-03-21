import TaskRow from "./TaskRow";
import style from './TasksTable.module.css';

const TasksTable = () => {

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
          <TaskRow task={{ title: 'Task 1', createdAt: new Date(), description: 'Hello world!' }}/>
          <TaskRow task={{ title: 'Task 2', createdAt: new Date(), description: 'Hello u!' }}/>
          <TaskRow task={{ title: 'Task 3', createdAt: new Date(), description: 'Hello lord!' }}/>
        </tbody>
      </table>

    </div>
  );
}

export default TasksTable;