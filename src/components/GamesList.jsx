import React, { useEffect, useState } from "react";
import API from "../api";
import GameCard from "./GameCard";

export default function GamesList({ selectedTag }) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    API.getAllGames().then((games) => {
      setGames(games);
      setIsLoading(true);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (selectedTag)
      API.getGamesByTag(selectedTag).then((games) => {
        setGames(games);
        setIsLoading(false);
      });
    else
      API.getAllGames().then((games) => {
        setGames(games);
        setIsLoading(false);
      });
  }, [selectedTag]);

  if (isLoading) return <div className="loading">Loading Games...</div>;

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
