import React, { ReactNode } from "react";
import "./App.css";
import Header from "./Headers/Header";
import MainBestItem from "./MainPage/MainBestItems/MainBestItem";
import MainRecommendItem from "./MainPage/MainRecommendItems/MainRecommendItem";
import MainNews from "./MainPage/MainNews/MainNews";
import MainRegionItem from "./MainPage/MainRegionItems/MainRegionItem";
import MainMoreAbout from "./MainPage/MainMoreAbout/MainMoreAbout";
import Footer from "./Footers/Footer";
import Concierge from "./Concierge/Concierge";

function Home() {
  return (
    <>
      <div>
        <div className="App">
          <Header />
        </div>
        <div className="liner"></div>
        <br />
        <div className="App">
          <MainBestItem />
          <MainRecommendItem />
          <MainNews />
          <MainRegionItem />
          <MainMoreAbout />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
