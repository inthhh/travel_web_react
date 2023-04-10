import React, { ReactNode } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logoimage from "../MainPage/MainImgs/amuse_logo.png";
import Concierge from "../Concierge/Concierge";
import { Link } from "react-router-dom";

function Header() {
  const movePage = useNavigate();
  const navigateToHome = () => {
    movePage("/");
  };
  const navigateToConcierge = () => {
    movePage("/Concierge");
  };
  const navigateToChildCare = () => {
    movePage("/ChildCare");
  };
  const navigateToSeniorCare = () => {
    movePage("/SeniorCare");
  };
  const navigateToOnlineTour = () => {
    movePage("/OnlineTour");
  };

  return (
    <div>
      <div className="top">
        <div onClick={navigateToHome}>
          <img className="logo" src={logoimage} alt="Amuse Travel Logo" />
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button className="searchBtn">Search</button>
        </div>
        <div className="whiteSquare"></div>
        <button className="loginBtn">로그인</button>
        <button className="signInBtn">회원가입</button>
      </div>
      <div className="menu">
        <div className="menu-item" onClick={navigateToConcierge}>
          👨🏼‍🦯 컨시어지 여행
        </div>
        <div className="menu-item" onClick={navigateToChildCare}>
          👶🏻 아이돌봄 여행
        </div>
        <div className="menu-item" onClick={navigateToSeniorCare}>
          👴🏼 어르신돌봄 여행
        </div>
        <div className="menu-item" onClick={navigateToOnlineTour}>
          🖥 랜선 여행
        </div>
        <div className="menu-item"> </div>
        <div className="menu-item">회사 소개</div>
      </div>
    </div>
  );
}

export default Header;
