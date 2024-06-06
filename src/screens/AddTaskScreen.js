import React from "react";
import AddTask from "../components/AddTask";
import { Link } from "react-router-dom";

const AddTaskScreen = () => {
  return (
    <div>
      <h1>Add New Task</h1>
      <AddTask />
      <Link to="/">Back to Tasks</Link>
    </div>
  );
};

export default AddTaskScreen;
