import React from "react";
import Card from "./Card";
import Trailblazer from "./Trailblazer";
import careerpath from "./Careerpath";
import { output } from "../Data/output";


export default function Commonpaths(props) {
  const careerPaths = output[props.data.title].careerPaths;
  console.log(careerPaths);
  return (
    <>
      <div className="header">Common Paths</div>

      <Card type="commonpaths" careerData={careerPaths} navTo="NextSteps" onUpdateComponent={props.onUpdateComponent} />
      {/* <Card />
      <Trailblazer /> */}

    </>
  );
}
