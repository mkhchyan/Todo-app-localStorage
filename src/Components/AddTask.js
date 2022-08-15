import React, { useState } from "react";
import styles from "./styles.module.css";

const AddTask = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
  const [error, setError] = useState(null);  

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (todo.task.length > 54) {
      setError('Task content can contain max 54 characters.')
        return false
    }
    addTodo({ ...todo, id: Math.round(Math.random() * 50) });
    setTodo({ ...todo, task: "" });
    // console.log("Submit", todo);
  }

  return (
    <div className={styles.title}>
      <h1>Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="input"
          name="task"
          value={todo.task}
          onChange={handleTaskInputChange}
          placeholder="Write here"
          className={styles.input}
          style={{
            border: error ? "1px solid #ff0000" : "1px solid #ffcd04"
          }}
        />
        <button type="submit" className={styles.btn}>
          Add
        </button>
      </form>
      {error && <small className={styles.errorText}>{error}</small>}
    </div>
  );
};

export default AddTask;
