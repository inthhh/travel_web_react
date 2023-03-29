import React, { ReactNode } from "react";
import "./MainMoreAbout.css";
import bcorplogo from "../imgs/bcorplogo.svg";
import logo01 from "../imgs/logo01.svg";
import logo02 from "../imgs/logo02.svg";
import logo03 from "../imgs/logo03.svg";
import logo04 from "../imgs/logo04.svg";
import logo05 from "../imgs/logo05.svg";

function MainMoreAbout() {
  return (
    <>
      <h3>어뮤즈트래블에 대해 더 알고싶다면?🔍</h3>
      <div className="middle">
        <h4 className="sns">네이버 블로그 </h4>
        <h4 className="sns">인스타그램 </h4>
        <h4 className="sns">페이스북 </h4>
      </div>
      <div style={{ clear: "left" }}></div>
      <div>
        <img className="logoImgs" src={bcorplogo} alt="Bcorp Logo" />
        <img className="logoImgs" src={logo01} alt="Logo 01" />
        <img className="logoImgs" src={logo02} alt="Logo 02" />
        <img className="logoImgs" src={logo03} alt="Logo 03" />
        <img className="logoImgs" src={logo04} alt="Logo 04" />
        <img className="logoImgs" src={logo05} alt="Logo 05" />
      </div>
      <div style={{ clear: "left" }}></div>
    </>
  );
}

export default MainMoreAbout;
