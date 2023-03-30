import React, { ReactNode } from "react";
import "./MainNews.css";

const BigBox = ({ backgroundColor }: { backgroundColor: string }) => (
  <div className="bigbox" style={{ backgroundColor }}></div>
);

function MainNews() {
  return (
    <>
      <h3>전해드릴 소식이 있어요📢</h3>
      <div className="container">
        <BigBox backgroundColor="lightgray" />
      </div>
    </>
  );
}

export default MainNews;
