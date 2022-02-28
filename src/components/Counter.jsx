import React from "react";

export default function Counter() {
  return (
    <div className="container">
      <h2 className="value">00</h2>
      <div className="btns">
        <button>Reset</button>
        <button>Decrement</button>
        <button>Increment</button>
      </div>
    </div>
  );
}
