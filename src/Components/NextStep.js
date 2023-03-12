import React, { useState } from "react";
import "./Card.css";

let data = [
  {
    profilepic: (
      <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo"></img>
    ),
    name: "John Doe",
    jobtitle: "Engineer",
    info: "Lyft",
  },
  {
    profilepic: (
      <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo"></img>
    ),
    name: "John Doe",
    jobtitle: "Software Engineer",
    info: "Amazon",
  },
  {
    profilepic: (
      <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo"></img>
    ),
    name: "John Doe",
    jobtitle: "Front end",
    info: "face",
  },
  {
    profilepic: (
      <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo"></img>
    ),
    name: "John Doe",
    jobtitle: "back end",
    info: "Tarasios",
  },
  {
    profilepic: (
      <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo"></img>
    ),
    name: "John Doe",
    jobtitle: "yououo",
    info: "book",
  },
];

export default function NextStep() {
  const list = data.map((element, index) => (
    <div className="grid1" key={index}>
      <div className="profilepic">{element.profilepic}</div>
      <div className="name">{element.name}</div>
      <div className="jobtitle1">{element.jobtitle}: {element.info}</div>
    </div>
  ));

  return (
    <>
      <div>1000+ People followed this path</div>
      {list}
    </>
  );
}
