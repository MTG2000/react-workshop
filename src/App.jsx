import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";
import WrapperCard from "./components/WrapperCard";

function App() {
  return (
    <div className="container">
      <WrapperCard />

      {/* <div className="card">
        <TodoFilters />
        <TodoList />
        <AddTodo />
      </div> */}
    </div>
  );
}

export default App;
