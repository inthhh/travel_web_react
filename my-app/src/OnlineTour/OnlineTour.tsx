import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Headers/Header";
import Footer from "../Footers/Footer";
import "../SubPage.css";
import OnlineTourTitle from "../SubtitleImgs/OnlineTourTitle.jpg";

function Concierge() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div className="liner"></div>
      {/* <br /> */}
      <div className="subTitleContainer">
        <img className="mainPicture" src={OnlineTourTitle} alt="OnlineTour Title img" />
        <h2 className="subTitle">랜선으로 떠나는 국내 체험 여행</h2>
        <h3 className="subContent">랜선으로 진행하는 국내 체험 여행</h3>
      </div>

      <div className="App"></div>
      <Footer />
    </div>
  );
}

export default Concierge;
