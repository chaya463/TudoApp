import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} />
      ))}
    </div>
  );
};

export default TaskList;
