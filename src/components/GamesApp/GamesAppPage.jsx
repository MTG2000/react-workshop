import { useState } from "react";
import GamesList from "./GamesList";
import Tags from "./Tags";

function GamesAppPage() {
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

export default GamesAppPage;
