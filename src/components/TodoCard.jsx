import React from "react";

export default function TodoCard({ todo }) {
  return (
    <div className={`todo-card ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          // Should toggle todo
        }}
      >
        {todo.text}
      </p>

      <button className="remove">Remove</button>
    </div>
  );
}
