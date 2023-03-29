import React from "react";
import "./App.css";
import Header from "./Headers/Header";
import MainBestItem from "./MainBestItems/MainBestItem";
import MainRecommendItem from "./MainRecommendItems/MainRecommendItem";
import MainNews from "./MainNews/MainNews";
import MainRegionItem from "./MainRegionItems/MainRegionItem";
import MainMoreAbout from "./MainMoreAbout/MainMoreAbout";
import Footer from "./Footers/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <br />

        <MainBestItem />
        <MainRecommendItem />
        <MainNews />
        <MainRegionItem />
        <MainMoreAbout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
