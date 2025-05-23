import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      await fetch(`/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect makes a call to the backend to get all the todos when the component mounts
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      {todos?.length > 0 && (
        <>
          <h2 className="title">Todo</h2>
          <ul className="app-todos">
            {todos.map((todo) => (
              <li key={todo.todo_id}>
                <span className="app-todos-title">{todo.description}</span>
                <div class="app-todos-buttons">
                  <EditTodo todo={todo} />
                  <button
                                        className="submit-button submit-button-small delete"
                                        onClick={() => deleteTodo(todo.todo_id)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-x"
                                            color="black"
                                        >
                                            <path d="M18 6 6 18" />
                                            <path d="m6 6 12 12" />
                                        </svg>
                                    </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </Fragment>
  );
};

export default ListTodos;
