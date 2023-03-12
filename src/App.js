import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Trailblazer from "./Components/Trailblazer";
import Commonpaths from "./Components/Commonpaths";
import NextStep from "./Components/NextStep";
import Onboarding from "./Components/Onboarding";
import Careerpath from "./Components/Careerpath";

function App() {
  const [component, setComponent] = useState("Onboarding");
  const [data, setData] = useState({});

  const components = {
    NextSteps: NextStep,
    Commonpaths: Commonpaths,
    Careerpath: Careerpath,
    Onboarding: Onboarding,
  };

  const Component = components[component];

  const handleUpdateComponent = (component, data) => {
    if (data) {
      setData(data);
    }
    setComponent(component);
  };
  return (
    <div className="App">
      <Component onUpdateComponent={handleUpdateComponent} data={data}/>
    </div>
  );
}

export default App;
