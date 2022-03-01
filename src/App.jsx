import { useState } from "react";
import "./App.css";
import GamesList from "./components/GamesList";
import Tags from "./components/Tags";

function App() {
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <div className="container">
      <Tags
        selectedTag={selectedTag}
        handleChangeTag={(tag) => setSelectedTag(tag)}
      />
      <GamesList selectedTag={selectedTag} />
    </div>
  );
}

export default App;
