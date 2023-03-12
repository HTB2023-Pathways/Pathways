import React, { useState, cloneElement } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Trailblazer from "./Components/Trailblazer";
import Commonpaths from "./Components/Commonpaths";
import NextStep from "./Components/NextStep";
import Onboarding from "./Components/Onboarding";
import Careerpath from "./Components/Careerpath";

function App() {
  const [clonedComponent, setClonedComponent] = useState();
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
    const clonedElement = cloneElement(<Component data={data} />);
    setClonedComponent(clonedElement);
    console.log(clonedComponent)
    if (data) {
      console.log("DATA", data)
      setData(data);
    }
    setComponent(component);
  };

  return (
    <div className="App">
        
        <Component onUpdateComponent={handleUpdateComponent} data={data}/>
       
        {/* <Onboarding /> */}
        {/* <Careerpath onUpdateComponent={handleUpdateComponent} data={data} /> */}
        {/* <Commonpaths onUpdateComponent={handleUpdateComponent} data={data} /> */}
        {/* <NextStep onUpdateComponent={handleUpdateComponent} data={data} /> */}
    </div>
  );
}

export default App;
