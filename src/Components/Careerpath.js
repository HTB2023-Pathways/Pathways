import { func } from "prop-types";
import React, { useState } from "react";
import Card from "./Card";
import "./Card.css";



const careerData = [
  { title: "Software Engineer", company: "Acme Corporation" },
  { title: "Junior Web Developer", company: "Delta Corporation" },
  { title: "CST", company: "BCIT" },
];

export default function Careerpath(props) {
  console.log(props.data);
  // const handleClick = () => {
  //   props.onUpdateComponent("Commonpaths");
  // };
  // const list = data.map((element, index) => (
  //   <div key={index}>
  //     <div className="header">{element.profilepic}</div>
  //     <div className="header">{element.fullname}</div>
  //   </div>
  // ));

  return (
    <div>
      <div className="header">Your Career Path</div>
      <div className="avatarcontainer">
        <div className="avatar placeholder ">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
            <span className="text-3xl">K</span>
          </div>
        </div>
        <div className="displayName">Kevin</div>
      </div>
      <Card
        careerData={careerData}
        navTo="Commonpaths"
        onUpdateComponent={props.onUpdateComponent}
      />
    </div>
  );
}
