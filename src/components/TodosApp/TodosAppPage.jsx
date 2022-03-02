import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";
import TodosContextProvider from "./components/TodosContext";

function TodosAppPage() {
  return (
    <div className="container">
      <div className="card">
        <TodosContextProvider>
          <TodoFilters />
          <TodoList />
          <AddTodo />
        </TodosContextProvider>
      </div>
    </div>
  );
}

export default TodosAppPage;
