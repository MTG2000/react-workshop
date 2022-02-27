import "./App.css";

function App() {
  return (
    <>
      <div className="background"></div>
      <form>
        <h3>Login Here</h3>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email@gmail.com" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
      </form>
    </>
  );
}

export default App;
