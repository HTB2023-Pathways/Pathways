import React, { useState } from "react";
import getJobTitle from "../Scripts/jobtitle";
import axios from 'axios';

export default function UserInput() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState();


  const handleInputChange = (event) => {
    console.log(event.key); // logs key input
    setInput(event.target.value);
  };
  
  const handleButtonPress = () => {
    console.log('Button was pressed!');
    setResults(getJobTitle(input));
    console.log(results);
  };


  return (
    <div>
      <input type="text" value={input} placeholder="Search" onChange={handleInputChange} />
      <button onClick={handleButtonPress}>Search</button>
    </div>
  );

  }