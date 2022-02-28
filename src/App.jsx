import "./App.css";
import GamesList from "./components/GamesList";
import Tags from "./components/Tags";

function App() {
  return (
    <div className="container">
      <Tags />
      <GamesList />
    </div>
  );
}

export default App;
