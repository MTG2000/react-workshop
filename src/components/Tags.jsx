import React, { useEffect, useState } from "react";
import API from "../api";

export default function Tags({ selectedTag, onChange }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    API.getAllTags().then((tags) => setTags(tags));
  }, []);

  const handleClick = (tag) => {
    if (tag === selectedTag) onChange("");
    else onChange(tag);
  };

  return (
    <div className="tags">
      {tags.map((tag) => (
        <div
          key={tag}
          className={`tag ${tag === selectedTag ? "selected" : ""}`}
          onClick={() => handleClick(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
