import React from "react";
import Options from "./options";
import "../styles/home.css";
import WorkArea from "./workArea";

const Home = () => {
  return (
    <div className="home-div">
      {/* <Options className="home-left" /> */}
      <WorkArea className="home-right" />
    </div>
  );
};

export default Home;
