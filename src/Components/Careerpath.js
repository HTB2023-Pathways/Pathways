import { func } from "prop-types";
import React, { useState } from "react";
import Card from "./Card";
import "./Card.css";

let data = [
  {
    profilepic: (
      <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo"></img>
    ),
    fullname: "Tarasios",
  },
];

export default function Careerpath(props) {
  // const handleClick = () => {
  //   props.onUpdateComponent("Commonpaths");
  // };
  const list = data.map((element, index) => (
    <div key={index}>
      <div className="header">{element.profilepic}</div>
      <div className="header">{element.fullname}</div>
    </div>
  ));

  return (
    <>
      <div className="header">Your Career Path</div>

      {list}
      <Card navTo="NextSteps" onUpdateComponent={props.onUpdateComponent} />
    </>
  );
}
