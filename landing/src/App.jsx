import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Main from "./components/Main";
import KeyFeatures from "./components/KeyFeatures";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <KeyFeatures /> */}
      <Banner />
      <Main />
    </div>
  );
}

export default App;
