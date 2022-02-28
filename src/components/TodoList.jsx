import React, { useState } from "react";
import TodoCard from "./TodoCard";

const initialData = [
  { id: 1, text: "Do The Dishes", isCompleted: false },
  { id: 2, text: "Take out the trash", isCompleted: true },
  { id: 3, text: "Watch AOT", isCompleted: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialData);

  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
