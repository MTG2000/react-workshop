import { useRef, useState } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ref = useRef();

  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    ref.current.focus();
  };

  const handlePasswordBlur = () => {
    const isValid = password.length >= 5;
    setIsPasswordError(!isValid);
  };

  return (
    <>
      <div className="background"></div>
      <form onSubmit={handleFormSubmit}>
        <h3>Login Here</h3>
        <label htmlFor="email">Email</label>
        <input
          ref={ref}
          type="email"
          placeholder="email@gmail.com"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
        {isPasswordError && <p className="error-msg">Password is invalid</p>}

        <button>Log In</button>
      </form>
    </>
  );
}

export default App;
