import React from "react";

const tags = [
  "story",
  "anime",
  "music",
  "fps",
  "violent",
  "multiplayer",
  "fast-paced",
  "atmosphere",
  "rpg",
  "fantasy",
  "dark",
  "indie",
  "puzzles",
  "beat-em-up",
];

export default function Tags() {
  const handleClick = (tag) => {};

  return (
    <div className="tags">
      {tags.map((tag) => (
        <div key={tag} className={`tag`} onClick={() => handleClick(tag)}>
          {tag}
        </div>
      ))}
    </div>
  );
}
