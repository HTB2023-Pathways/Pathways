import React, { useState } from "react";
import Card from "./Card";
import { output } from "../Data/output";
import "./Card.css";
import searchJobHistory from "../Scripts/searchJobHistory";
import { logJobHistory } from "../Scripts/JobLogging";
import { userData } from "../Data/userData.js";

export default function NextStep(props) {
  const count = props.data.count;
  const result = searchJobHistory(props.data.title);
  const careerPaths = logJobHistory(userData)[props.data.title].careerPaths;
  console.log(result)

  const list = (result.length ? result.slice(0, 3).map((element, index) => (
    <div className="grid1" key={index}>
      {/* <div className="profilepic">{element.profilepic}</div> */}
      <div className="name">{element.name}</div>
      <div className="jobtitle1">{element.title}: {element.company}</div>
    </div>
  )) : <div>loading...</div>)

  return (
    <>
      <div>{count}+ People followed this path</div>
      {list}
      <div className="profilepic"> See more</div>
      <div> Next steps for this job</div>
      <Card type="commonpaths" careerData={careerPaths} />
    </>
  );
}
