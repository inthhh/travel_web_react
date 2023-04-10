import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Headers/Header";
import Footer from "../Footers/Footer";
import "../SubPage.css";

function Concierge() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div className="liner"></div>
      {/* <br /> */}
      <div className="mainPicture"></div>
      <div className="App"></div>
      <Footer />
    </div>
  );
}

export default Concierge;
