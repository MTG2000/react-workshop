import { useState } from "react";
import "./App.css";
import GamesList from "./components/GamesList";
import Tags from "./components/Tags";

function App() {
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <div className="container">
      <Tags selectedTag={selectedTag} onChange={setSelectedTag} />
      <GamesList selectedTag={selectedTag} />
    </div>
  );
}

export default App;
