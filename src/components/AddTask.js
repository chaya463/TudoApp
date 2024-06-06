import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const AddTask = () => {
  const [task, setTask] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ text: task, completed: false });
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
