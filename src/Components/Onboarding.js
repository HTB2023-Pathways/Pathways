import React, { useState } from "react";
import Input from "./Input";

function Onboarding(props) {
  const handleButtonClick = () => {
    props.onUpdateComponent("Careerpath");
  };

  return (
    <>
      <div className="flex-1 place-content-center">
        <h1 className="heading">Welcome to Pathways!</h1>
        <p className="onboard-p">
          Start by filling your 3 most recent experiences.
        </p>
        <div className="container mx-auto px-4">
          <label className="label">
            <span className="label-text">Job Title*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            value="Software Engineer"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="container mx-auto px-4">
          <label className="label">
            <span className="label-text">Most recent employer*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            value={"Acme Corporation"}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="container mx-auto px-4 past-experience">
          <label className="label">
            <span className="label-text">Past Job Title*</span>
          </label>
          <input
            type="text"
            value="Junior Web Developer"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="container mx-auto px-4">
          <label className="label">
            <span className="label-text">Past employer*</span>
          </label>
          <input
            type="text"
            value="Delta Corporation"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="container mx-auto px-4 past-experience">
          <label className="label">
            <span className="label-text">Past Job Title*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            value="CST"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="container mx-auto px-4">
          <label className="label">
            <span className="label-text">Past employer*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            value="BCIT"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="nextButton" onClick={handleButtonClick}>
          Next
        </button>
      </div>
    </>
  );
}

export default Onboarding;
