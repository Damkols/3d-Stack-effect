import React from "react";

const Title = ({ title, setRotation, setIndex, index }) => {
  return (
    <div
      className="title__item"
      onMouseEnter={() => setRotation(index)}
      onMouseLeave={() => setIndex(-1)}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
