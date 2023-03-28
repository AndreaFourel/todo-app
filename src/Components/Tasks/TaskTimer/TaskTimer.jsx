import { useContext, useEffect } from "react";
import { TasksContext } from "../../../Contexts/TasksContext";
import useTimeParser from "../../../Hooks/useTimeParser";
import useTimer from "../../../Hooks/useTimer";
import Button from "../../UI/Button/Button";
import style from './TaskTimer.module.css';

const TaskTimer = ({ index, onCloseModal }) => {

  const { time, startTimer, stopTimer} = useTimer();
  const { parseSecondsToHMS } = useTimeParser();

  const { editTask } = useContext(TasksContext);

  useEffect(() => {
    startTimer();
    return () => {//equivalent d'un componentWillUnmount
      stopTimer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStopTimer = () => {
    const savedTime = stopTimer();
    editTask({ taskIndex: index, task: { time: savedTime } })
    onCloseModal();
  }

  return (
    <div className={ style['timer-container'] }>
      <p className={ style.timer }>{ parseSecondsToHMS(time) }</p>
      <Button onClick={ handleStopTimer }>Stop</Button>
    </div>
  );
};

export default TaskTimer;