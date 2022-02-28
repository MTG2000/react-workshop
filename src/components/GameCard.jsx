import React from "react";

export default function GameCard({ title, img, tags }) {
  return (
    <div className="game-card">
      <img src={img} alt={title} />
      <h6>{title.replaceAll("-", " ")}</h6>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="game-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
