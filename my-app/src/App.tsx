import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Headers/Header";
import MainBestItem from "./MainBestItems/MainBestItem";
import MainRecommendItem from "./MainRecommendItems/MainRecommendItem";
import MainNews from "./MainNews/MainNews";

function App() {
  return (
    <div className="App">
      <Header />
      <br />

      <MainBestItem />
      <MainRecommendItem />
      <MainNews />
      {/* <h1>Test Page</h1> */}
      <main>{/* Main content here */}</main>
      <footer>{/* Footer content here */}</footer>
    </div>
  );
}

export default App;
