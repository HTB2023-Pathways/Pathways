import React, { useState } from 'react';
import './Card.css';

export default function Trailblazer() {
const [selectedCard, setSelectedCard] = useState(null);

let data = [
    {
      jobtitle: "Fashion Designer",
      numpeople: 1,
    },
    {
      jobtitle: "Tech Coaching",
      numpeople: 1,
    },
    {
      jobtitle: "CEO",
      numpeople: 1,
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
      <div className="info">{element.numpeople}</div>
    </div>
  ));
  return <>
    <div class="grid">
    <div className="header" >Trailblazers</div>
    <div className="headerButton" > See All --</div>
    </div>
  {list}</>;

}

