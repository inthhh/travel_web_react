import React, { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Concierge from "./Concierge/Concierge";
import ChildCare from "./ChildCare/ChildCare";
import SeniorCare from "./SeniorCare/SeniorCare";
import OnlineTour from "./OnlineTour/OnlineTour";
// import NotFound from './NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Concierge" element={<Concierge />}></Route>
        <Route path="/ChildCare" element={<ChildCare />}></Route>
        <Route path="/SeniorCare" element={<SeniorCare />}></Route>
        <Route path="/OnlineTour" element={<OnlineTour />}></Route>
      </Routes>
    </div>
  );
}

export default App;
