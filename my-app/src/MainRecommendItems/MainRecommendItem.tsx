import React, { ReactNode } from "react";
import "./MainRecommendItem.css";

const Box = ({ backgroundColor }: { backgroundColor: string }) => (
  <div className="box" style={{ backgroundColor }}></div>
);

function MainRecommendItem() {
  return (
    <>
      <h3>어뮤즈가 추천하는 여행🚙</h3>
      <div className="container">
        <Box backgroundColor="lightgray" />
        <Box backgroundColor="lightgray" />
        <Box backgroundColor="lightgray" />
      </div>
    </>
  );
}

export default MainRecommendItem;
