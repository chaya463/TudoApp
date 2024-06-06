import React from "react";
import TaskList from "../components/TaskList";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <TaskList />
      <Link to="/add">Add Task</Link>
    </div>
  );
};

export default HomeScreen;
