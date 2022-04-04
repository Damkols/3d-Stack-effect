import React, { useState } from "react";
import Title from "../components/Title";
import Image from "../components/Image";
import { pageData } from "../data";
import Header from "../components/Header/Header";

const Home = () => {
  const [rotationPosition, setRotation] = useState(
    new Array(pageData.length).fill(0)
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSetRotation = (itemIndex) => {
    const newRotation =
      Math.random() * 7 * (Math.round(Math.random()) ? 1 : -1);

    const tempState = [...rotationPosition];
    tempState[itemIndex] = newRotation;
    setRotation(tempState);
    setActiveIndex(itemIndex);
  };
  return (
    <>
      <Header />
      <div className="main-container" id="main-container">
        <div className="title-container">
          {pageData.map(({ title }, index) => (
            <Title
              key={index}
              title={title}
              index={index}
              setRotation={handleSetRotation}
              setIndex={setActiveIndex}
            />
          ))}
        </div>
        <div className="image-container">
          {pageData.map(({ url }, index) => (
            <Image
              key={index}
              url={url}
              active={activeIndex === index}
              rotationPosition={rotationPosition[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
