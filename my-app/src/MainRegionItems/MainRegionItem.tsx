import React, { ReactNode } from "react";
import "./MainRegionItem.css";

const Box = ({ backgroundColor }: { backgroundColor: string }) => (
  <div className="regionBox" style={{ backgroundColor }}></div>
);

function MainRegionItem() {
  return (
    <>
      <h3>지역 별 여행 상품📍</h3>
      <div className="container">
        <Box backgroundColor="lightgray" />
        <Box backgroundColor="lightgray" />
        <Box backgroundColor="lightgray" />
      </div>
      <div className="container">
        <Box backgroundColor="lightgray" />
        <Box backgroundColor="lightgray" />
        <Box backgroundColor="lightgray" />
      </div>
      <div className="container">
        <Box backgroundColor="lightgray" />
      </div>
    </>
  );
}

export default MainRegionItem;
