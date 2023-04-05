import React, { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Concierge from "./Concierge/Concierge";
import Home from "./Home";
// import NotFound from './NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Concierge" element={<Concierge />}></Route>
      </Routes>
    </div>
  );
}

export default App;
