import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";

import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Business from "./components/pages/Business";
import Entertainment from "./components/pages/Entertainment";
import Health from "./components/pages/Health";
import Science from "./components/pages/Science";
import Sports from "./components/pages/Sports";
import Technology from "./components/pages/Technology";

function App() {
  const [progress, setProgress] = useState(0)

let chaneProgress =(progressVal)=>{
  setProgress(progressVal)
}

  return (
    <Router>
      <Navbar />
      <LoadingBar
        color='linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)'
        height={3}
        progress={progress}
      />
      <div style={{marginTop:"5rem"}}>
     
        <Routes>
          <Route path="/" element={<Home chaneProgress={chaneProgress}/>} />
  <Route path="/Business" element={<Business chaneProgress={chaneProgress}/>}>Business</Route>
  <Route path="/Entertainment" element={<Entertainment chaneProgress={chaneProgress}/>}>Entertainment</Route>
  <Route path="/Health" element={<Health chaneProgress={chaneProgress}/>}>Health</Route>
  <Route path="/Science" element={<Science chaneProgress={chaneProgress}/>}>Science</Route>
  <Route path="/Sports" element={<Sports chaneProgress={chaneProgress}/>}>Sports</Route>
  <Route path="/Technology" element={<Technology chaneProgress={chaneProgress}/>}>Technology</Route>

        </Routes>
      </div>
     
    </Router>
  );
}

export default App;
