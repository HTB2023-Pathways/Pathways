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

const careerData = [
  {title: "Software Engineer", company: "Acme Corporation"},
  {title: "Junior Web Developer", company: "Delta Corporation"},
  {title: "CST", company: "BCIT"},
]

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
      <Card careerData={careerData} navTo="Commonpaths" onUpdateComponent={props.onUpdateComponent} />
    </>
  );
}
