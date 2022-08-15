import React from "react";
import styles from "./styles.module.css";
import { List } from "@mui/material";
import Task from "./TaskItem";

const Tasks = ({ todos, removeTodo, toggleComplete }) => {
  return (
    <div className={styles.content}>
      {todos && todos.length > 0 ? (
        <List>
          {todos?.map((todo) => (
            <Task
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleComplete={toggleComplete}
            />
          ))}
        </List>
      ) : (
        <div className={styles.empty}>
          <p>Your life is a blank page. You write on it.</p>
          <h3>So start by adding your tasks here.</h3>
        </div>
      )}
    </div>
  );
};

export default Tasks;
