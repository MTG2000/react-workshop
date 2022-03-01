import React, { useState } from "react";
import GameCard from "./GameCard";

export default function GamesList({ selectedTag }) {
  const [games, setGames] = useState([]);

  return (
    <div className="games">
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          img={game.img}
          tags={game.tags}
        />
      ))}
    </div>
  );
}
