import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Headers/Header";
import Footer from "../Footers/Footer";
import "../SubPage.css";
import SeniorTitle from "../SubtitleImgs/SeniorTitle.jpg";

function Concierge() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div className="liner"></div>
      {/* <br /> */}
      <div className="subTitleContainer">
        <img className="mainPicture" src={SeniorTitle} alt="Senior Title img" />
        <h2 className="subTitle">어르신을 위한 돌봄여행</h2>
        <h3 className="subContent">돌봄이와 함께하는 65세 이상 소규모 여행</h3>
      </div>

      <div className="App"></div>
      <Footer />
    </div>
  );
}

export default Concierge;
