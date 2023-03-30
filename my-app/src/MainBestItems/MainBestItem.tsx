import React, { ReactNode } from "react";
// import "./MainBestItem.css";

const Box = ({ backgroundColor }: { backgroundColor: string }) => (
  <div className="box" style={{ backgroundColor }}></div>
);

function MainBestItem() {
  return (
    <>
      <h3>실시간 Best 여행 상품🏞</h3>
      <div className="container">
        <Box backgroundColor="lightgray" />
        <Box backgroundColor="lightgray" />
        <Box backgroundColor="lightgray" />
      </div>
    </>
  );
}

export default MainBestItem;
