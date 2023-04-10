import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Headers/Header";
import Footer from "../Footers/Footer";
import "../SubPage.css";
import ChildTitle from "../SubtitleImgs/ChildTitle.jpg";

const Box = ({ backgroundColor, marginRight }: { backgroundColor: string; marginRight: string }) => (
  <div className="box" style={{ backgroundColor, marginRight }}></div>
);

function Concierge() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div className="liner"></div>
      {/* <br /> */}
      <div className="subTitleContainer">
        <img className="mainPicture" src={ChildTitle} alt="Child Title img" />
        <h2 className="subTitle">아이와 함께하는 돌봄여행</h2>
        <h3 className="subContent">어린이/어른 코스로 구성된 어린이 동반 가족 여행</h3>
      </div>

      <div className="App">
        <h2 style={{ marginTop: "2rem" }}>아이돌봄 여행 Best 상품🏞</h2>
        <div className="container">
          <Box backgroundColor="lightgray" marginRight="57px" />
          <Box backgroundColor="lightgray" marginRight="0" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Concierge;
