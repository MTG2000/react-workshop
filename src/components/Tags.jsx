import React, { useState } from "react";

export default function Tags() {
  const [tags, setTags] = useState([]);

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
