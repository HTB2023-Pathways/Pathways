import React, { useState } from "react";
import Card from "./Card";
import { output } from "../Data/output";
import "./Card.css";
import searchJobHistory from "../Scripts/searchJobHistory";
import { logJobHistory } from "../Scripts/JobLogging";
import { userData } from "../Data/userData.js";

function getRandomColor() {
  // Generate random RGB values
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  
  // Check the color's contrast with white text
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
  const textContrast = (luminance + 0.05) / 0.05;
  
  // If contrast ratio is too low, generate a new color
  if (textContrast < 4.5) {
    return getRandomColor();
  }
  
  // Convert RGB to hex code and return it
  const hex = ((red << 16) | (green << 8) | blue).toString(16);
  return `#${'0'.repeat(6 - hex.length)}${hex}`;
}


export default function NextStep(props) {

  function convertToYearRange(num) {
    const lowerBound = Math.floor(num);
    const upperBound = lowerBound + 1;
    return `${lowerBound} - ${upperBound} years`;
  }

  console.log(props.data)
  const count = props.data.count;
  const result = searchJobHistory(props.data.title);
  const careerPaths = logJobHistory(userData)[props.data.title].careerPaths;
  console.log(result)
  console.log(props.data.averageDuration)
  const list = (result.length ? result.slice(0, 3).map((element, index) => (
    <div className="grid1" key={index}>
      <div className="profilepic" style={{background: `${getRandomColor()}`}}>{element.name.charAt(0)}</div>
      <div>
        <h3 className="name">{element.name}</h3>
        <div className="jobtitle1">{element.title}</div>
        <div className="jobtitle1">{element.company}</div>
      </div>
    </div>
  )) : <div>loading...</div>)

  return (

    <div className="next-steps-container">
      <button className="backButton" onClick={() => props.onUpdateComponent("Careerpath")}>Back</button>
      <div>
        <h2>From <span style={{color: "#0d68da"}}>{props.data.previousTitle}</span> to <span style={{color: "#0d68da"}}>{props.data.title}</span></h2>
        <h1>{count}+</h1>
        <div>People took this path</div>
      </div>
      <div>
        <div className="see-more-container">
          <h2>People who followed this path</h2>
          <div className="see-more-text">{`See more`}</div>
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: "1em"}}>
          {list}
        </div>
      </div>
      <div>
        <div className="see-more-container">
            <h2>On average, this path took</h2>
          <div className="see-more-text">{`See more`}</div>
        </div>
        <h1>{convertToYearRange(props.data.averageDuration)}</h1>
      </div>
      <div>
      <div>
          <div className="see-more-container">
            <h2> Next steps for this job</h2>
            <div className="see-more-text">{`See more`}</div>
          </div>
          <div>
            <Card type="commonpaths" careerData={careerPaths} />
          </div>
        </div>
      </div>
    </div>
  );
}
