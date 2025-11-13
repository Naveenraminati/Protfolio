import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Knowledge from "./components/Knowledge";
import WorkExperience from "./components/WorkExperience";
import Achievements from "./components/Achievements";


function App() {
  return (
    <div>
      <Navbar></Navbar>
  <About></About>
  <WorkExperience></WorkExperience>
    <Knowledge></Knowledge>
    <Achievements></Achievements>
    
       <Contact></Contact>
    </div>
  );
}

export default App;
