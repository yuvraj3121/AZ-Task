import React from "react";
import {
  HiBell,
  HiMenu,
  HiOutlineClipboard,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { IoStarOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import conlogo from "../img/contest-black.png";
import "../styles/options.css";

const Options = ({ setSelectedOption }) => {
  return (
    <div className="options-div">
      <span className="odiv-top">
        <HiMenu className="ologo" />
        <p>AlgoZenith</p>
      </span>
      <span className="odiv-toprig">
        <HiBell className="bellicon" />
        <span className="profile"></span>
      </span>
      <ul>
        <li onClick={() => setSelectedOption("Dashboard")}>
          <HiOutlineSquares2X2 className="ologo" />
          <p>Dashboard</p>
        </li>
        <li onClick={() => setSelectedOption("Learn")}>
          <HiOutlineLightBulb className="ologo" />
          <p>Learn</p>
        </li>
        <li onClick={() => setSelectedOption("Forums")}>
          <HiOutlineUserGroup className="ologo" />
          <p>Forums</p>
        </li>
        <li onClick={() => setSelectedOption("Upskill")}>
          <HiOutlineClipboard className="ologo" />
          <p>Upskill</p>
        </li>
        <li onClick={() => setSelectedOption("Contest")}>
          <img src={conlogo} alt="conlogo" />
          <p>Contest</p>
        </li>
        <li onClick={() => setSelectedOption("Leaderboard")}>
          <IoStarOutline className="ologo" />
          <p>Leaderboard</p>
        </li>
      </ul>
    </div>
  );
};

export default Options;
