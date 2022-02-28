import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <div className="card">
        <TodoFilters />
        <TodoList />
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
