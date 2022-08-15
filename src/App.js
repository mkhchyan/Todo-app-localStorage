import { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";
import Hide from "./Components/Hide";
import Tasks from "./Components/Tasks";
import styles from "./Components/styles.module.css";
// import { v4 as uuid } from "uuid";

function App() {
  const storageTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [todos, setTodos] = useState(storageTodos);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
    console.log("OK", todos);
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // function hideCompleted(completed) {
  //   setTodos(todos.filter((todo) => todo.completed !== completed));
  // }

  return (
    <div className={styles.App}>
      <Hide />
      <AddTask addTodo={addTodo} />
      <Tasks
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
