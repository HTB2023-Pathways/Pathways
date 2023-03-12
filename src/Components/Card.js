import React, { useState } from 'react';
import './Card.css';

export default function Card() {
  const [selectedCard, setSelectedCard] = useState(null);

  let data = [
    {
      jobtitle: "Engineer",
      info: "Lyft",
    },
    {
      jobtitle: "Software Engineer",
      info: "Amazon",
    },
    {
      jobtitle: "Front end",
      info: "face",
    },
    {
      jobtitle: "back end",
      info: "Tarasios",
    },
    {
      jobtitle: "yououo",
      info: "book",
    },
  ];

  function handleMouseEnter(index) {
    setSelectedCard(index);
  }

  function handleMouseLeave() {
    setSelectedCard(null);
  }

  const list = data.map((element, index) => (
    <div
      key={index}
      className="container"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave()}
      style={{
        border: selectedCard === index ? '5px solid grey' : '2px solid black',
      }}
    >
      <div className="jobtitle">{element.jobtitle}</div>
      <div className="info">{element.info}</div>
    </div>
  ));

  return <>
        <div class="grid">
        <div className="header ">Most Common Paths</div>
        <div className="headerButton" > See All --</div>
        </div>  
        {list}
        </>;
}