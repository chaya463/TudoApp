import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const Task = ({ task, index }) => {
  const { toggleTaskCompletion, deleteTask, editTask } =
    useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(index, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          onClick={() => toggleTaskCompletion(index)}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
};

export default Task;
