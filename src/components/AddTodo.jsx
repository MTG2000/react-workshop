import React, { useState } from "react";

export default function AddTodo() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      // Add the todo to the todos list
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
