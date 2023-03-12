import React, { useState } from 'react';
import './Card.css';

let data = [
    {
        profilepic: <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo"></img>,
        name: "John Doe",
      jobtitle: "Engineer",
      info: "Lyft",
    },
    {
        profilepic: <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo"></img>,
        name: "John Doe",
      jobtitle: "Software Engineer",
      info: "Amazon",
    },
    {
        profilepic: <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo"></img>,
        name: "John Doe",
      jobtitle: "Front end",
      info: "face",
    },
    {
        profilepic: <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo"></img>,
        name: "John Doe",
      jobtitle: "back end",
      info: "Tarasios",
    },
    {
        profilepic: <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo"></img>,
        name: "John Doe",
      jobtitle: "yououo",
      info: "book",
    },
  ];

export default function NextStep() {
            const list = data.map((element, index) => (
            <div key={index}>
            <div className="header">{element.profilepic}</div>
            <div className="header">{element.fullname}</div>
        </div>
    return <>
            <div>1000+ People followed this path</div>
    ));
    
    </>;

}