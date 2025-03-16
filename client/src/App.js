import "./App.css";
import { Fragment } from "react";

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="app">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
