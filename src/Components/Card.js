import React, { useState } from "react";
import "./Card.css";

export default function Card(props) {
  const [selectedCard, setSelectedCard] = useState(null);

  function handleMouseEnter(index) {
    setSelectedCard(index);
  }

  function handleMouseLeave() {
    setSelectedCard(null);
  }

  const handleClick = (data) => {
    props.onUpdateComponent(props.navTo, data);
  };

  const careerData = props.careerData;

  if (props.type === "commonpaths") {
    careerData.sort((a, b) => {
      return b.count - a.count;
    });
  }

  const list = props.careerData.map((element, index) => (
    <div
      key={index}
      className="container"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave()}
      style={{
        border: selectedCard === index ? "5px solid grey" : "2px solid black",
      }}
      onClick={handleClick.bind(this, element)}
    >
      <div className="jobtitle">{Object.values(element)[0]}</div>
      <div className="info">{Object.values(element)[1]}</div>
    </div>
  ));

  return (
    <>
      {/* <div class="grid">
        <div className="header ">Most Common Paths</div>
        <div className="headerButton"> See All --</div>
      </div> */}
      {list}
    </>
  );
}
