import { func } from "prop-types";
import React from "react";
import './Card.css';

let data = [
    {
        profilepic: <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo"></img>,
        fullname: "Tarasios"
    }
];

export default function Careerpath() {
    const list = data.map((element, index) => (
      <div key={index}>
        <div className="header">{element.profilepic}</div>
        <div className="header">{element.fullname}</div>
      </div>
    ));
  
    return<>
    <div className="header">Your Career Path</div>

  {list}</>;
  }

