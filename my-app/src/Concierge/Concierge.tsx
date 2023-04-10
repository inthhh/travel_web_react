import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Headers/Header";
import Footer from "../Footers/Footer";
import "../SubPage.css";
import ConciergeTitle from "../SubtitleImgs/ConciergeTitle.jpg";

function Concierge() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div className="liner"></div>
      {/* <br /> */}
      <div className="subTitleContainer">
        <img className="mainPicture" src={ConciergeTitle} alt="Concierge Title img" />
        <h2 className="subTitle">누구나 즐겁게 떠나는 여행</h2>
        <h3 className="subContent">장애 유형별 맞춤형 일정으로 진행되는 풀컨시어지 여행</h3>
      </div>
      <div className="App"></div>
      <Footer />
    </div>
  );
}

export default Concierge;
