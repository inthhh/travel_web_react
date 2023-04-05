import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Headers/Header";
import Footer from "../Footers/Footer";

function ChildCare() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div className="liner"></div>
      <br />
      <div className="App"></div>
      <Footer />
    </div>
  );
}

export default ChildCare;
