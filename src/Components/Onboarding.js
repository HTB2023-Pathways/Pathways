import React, { useState } from "react";
import Input from "./Input";

function Onboarding(props) {
  const handleButtonClick = () => {
    props.onUpdateComponent("Careerpath");
  };

  return (
    <>
      <div>Onboarding</div>
      <div>Job</div>
      <Input type="job" />
      <div>Company</div>
      <Input type="company" />
      <button onClick={handleButtonClick}>Next</button>
    </>
  );
}

export default Onboarding;
