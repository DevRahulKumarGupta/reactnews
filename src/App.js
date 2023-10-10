import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./components/pages/Home";
import Business from "./components/pages/Business";
import Entertainment from "./components/pages/Entertainment";
import Health from "./components/pages/Health";
import Science from "./components/pages/Science";
import Sports from "./components/pages/Sports";
import Technology from "./components/pages/Technology";

function App() {

  return (
    <Router>
      <Navbar />
      <div>
     
        <Routes>
          <Route path="/" element={<Home />} />
  <Route path="/Business" element={<Business />}>Business</Route>
  <Route path="/Entertainment" element={<Entertainment />}>Entertainment</Route>
  <Route path="/Health" element={<Health />}>Health</Route>
  <Route path="/Science" element={<Science />}>Science</Route>
  <Route path="/Sports" element={<Sports />}>Sports</Route>
  <Route path="/Technology" element={<Technology />}>Technology</Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
