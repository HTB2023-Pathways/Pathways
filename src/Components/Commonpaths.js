import React from "react";
import Card from "./Card";
import Trailblazer from "./Trailblazer";
import careerpath from "./Careerpath";
import { output } from "../Data/output";
import { userData } from "../Data/userData.js";
import { logJobHistory } from "../Scripts/JobLogging";

export default function Commonpaths(props) {
  const careerPaths = logJobHistory(userData)[props.data.title].careerPaths;


  console.log(careerPaths);
  return (
    <>
    {/* <button onClick={}>Back</button> */}
      <div className="headerContainer">
        <div className="header">Most common paths</div>
        <div className="headerButton">See all →</div>
      </div>
      <Card
        type="commonpaths"
        careerData={careerPaths.slice(0, 4)}
        navTo="NextSteps"
        onUpdateComponent={props.onUpdateComponent}
      />
      <div className="headerContainer trailblazers">
        <div className="header">Trailblazers</div>
        <div className="headerButton">See more →</div>
      </div>
      {/* <Card />
      <Trailblazer /> */}
    </>
  );
}
