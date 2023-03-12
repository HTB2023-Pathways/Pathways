import React, { useState } from "react";
import getJobTitle from "../Scripts/jobtitle";
import getCompanyName from "../Scripts/companysearch";
//import axios from 'axios';

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

export default function UserInput(props) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState();

  const searchType = props.type;


  const handleInputChange = (event) => {
    console.log(event.key); // logs key input
    setInput(event.target.value);
  };

  // const handleButtonPress = async () => {
  //   console.log('Button was pressed!');
  //   const newResults = getJobTitle(input).then((res) => {
  //     console.log("heheh", res)
  //     setResults(res);
  //   })
  // };

  const handleDebouncedInputChange = debounce(() => {
    console.log("Input changed!", input);

    if (searchType === "job") {
        getJobTitle(input).then((res) => {
            console.log("API results:", res);
            setResults(res);
        });
    } else {
        getCompanyName(input).then((res) => {
            console.log("API results:", res);
            setResults(res);
        });
    }
  }, 1000);

  return (
    <div>
      <input type="text" value={input} placeholder="Search" onChange={(event) => {
          handleInputChange(event);
          handleDebouncedInputChange();
        }}
        />
      {results && results.length && (
        <ul>
          {results.map((result)=>(
            <li>{result.name}</li>
          ))}
        </ul>
      )}
      {/* <button onClick={handleButtonPress}>Search</button> */}
    </div>
  );

  }