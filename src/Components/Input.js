import React, { useState } from "react";

export default function UserInput() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    console.log(event.key); // logs key input
    setInput(event.target.value);
  };
  
  const handleButtonPress = () => {
    console.log('Button was pressed!');
  };

  return (
    <div>
      <input type="text" value={input} placeholder="Search" onChange={handleInputChange} />
      <button onClick={handleButtonPress}>Search</button>
    </div>
  );

  }