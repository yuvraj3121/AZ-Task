import React, { useEffect, useState } from "react";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import "../styles/workArea.css";
import { FaAngleDown, FaAngleUp, FaRegCopy } from "react-icons/fa6";
import { BsClock, BsCodeSlash } from "react-icons/bs";
import { PiPlayCircleLight, PiQuestion } from "react-icons/pi";
import contlogo from "../img/contest.png";

const WorkArea = () => {
  const [isDown, setIsDown] = useState(null);
  const [activeButton, setActiveButton] = useState(1);
  const [visibleTime, setVisibleTime] = useState(null);
  const [selectedCh, setSelectedCh] = useState(false);
  const [visibleContent, setVisibleContent] = useState(null);
  const [selectedBox, setSelectedBox] = useState(null);
  let index = 0;

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const handleClick = (index) => {
    setVisibleTime((prevIndex) => (prevIndex === index ? null : index));
    setSelectedCh(true);
    setSelectedBox(index);
  };

  const handleArrowClick = (index) => {
    setIsDown(index);
    setVisibleContent((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="wa-div">
      <div className="wa-top">
        <span className="top-left">
          <span
            className={`button ${activeButton === 1 ? "active" : ""}`}
            onClick={() => handleButtonClick(1)}
          >
            <HiOutlineCalendar className="btn-logo" />
            <p>Mentor Sessions</p>
          </span>
          <span
            className={`button ${activeButton === 2 ? "active" : ""}`}
            onClick={() => handleButtonClick(2)}
          >
            <HiOutlineBriefcase className="btn-logo" />
            <p>Learning Material</p>
          </span>
          <div
            className="highlight-box"
            style={{ left: activeButton === 1 ? "0" : "calc(50% + 10px)" }}
          ></div>
        </span>
        <span className="top-right">
          <HiOutlineInformationCircle className="btn-logo" />
          <p>How it works</p>
        </span>
      </div>
      {activeButton === 2 ? (
        <div className="wa-bottom">
          <div className="bottom-left">
            <ul>
              {[
                "Chapter 1",
                "Chapter 2",
                "Chapter 3",
                "Chapter 4",
                "Chapter 5",
              ].map((chapter, index) => (
                <li
                  key={index}
                  className={`ch ${selectedBox === index ? "selected" : ""}`}
                  onClick={() => handleClick(index)}
                >
                  <p className="ch-name">{chapter}</p>
                  {visibleTime === index && (
                    <span className="ch-duration">
                      <BsClock />
                      <p>05:00:00</p>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {selectedCh ? (
            <div className="bottom-right">
              <div className="brdiv" key={index + 1}>
                <span className="brdiv-up">
                  <span className="wabr-left">
                    <p className="wabrl-p1">PART 1</p>
                    <p className="wabrl-p2">Lorem Ipsum Dolor Sit Amet</p>
                  </span>
                  <span className="wabr-right">
                    <span className="rightup">
                      <BsClock />
                      <p>02:00:00</p>
                      <span className="conlogo">
                        <img src={contlogo} alt="conlogo" />
                      </span>
                      <p>Medium</p>
                      <FaRegCopy />
                      <p>5</p>
                      <span
                        key={index + 1}
                        className="arrow"
                        onClick={() => handleArrowClick(index + 1)}
                      >
                        {isDown === index + 1 &&
                        visibleContent === index + 1 ? (
                          <FaAngleUp />
                        ) : (
                          <FaAngleDown />
                        )}
                      </span>
                    </span>
                    <span className="rightdown">45% completed</span>
                  </span>
                </span>
                <span className="brdiv-down">
                  <span className={"bar1"}></span>
                </span>
                {isDown && visibleContent === index + 1 ? (
                  <div className="br-content active">
                    <ul>
                      {[
                        "Video 1",
                        "Article 1",
                        "Quiz 1",
                        "Coding Exercise 1",
                        "Combined Resource 1",
                      ].map((item, idx) => (
                        <li key={idx}>
                          <span>
                            <PiPlayCircleLight className="brc-logo" />
                            <p>{item}</p>
                          </span>
                          <span className="subcon-dur">
                            <BsClock className="brc-logo" />
                            <p>10:00</p>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="brdiv" key={index + 2}>
                <span className="brdiv-up">
                  <span className="wabr-left">
                    <p className="wabrl-p1">PART 2</p>
                    <p className="wabrl-p2">Lorem Ipsum Dolor Sit Amet</p>
                  </span>
                  <span className="wabr-right">
                    <span className="rightup">
                      <BsClock />
                      <p>02:00:00</p>
                      <span className="conlogo">
                        <img src={contlogo} alt="conlogo" />
                      </span>
                      <p>Medium</p>
                      <FaRegCopy />
                      <p>12</p>
                      <span
                        key={index + 2}
                        className="arrow"
                        onClick={() => handleArrowClick(index + 2)}
                      >
                        {isDown === index + 2 &&
                        visibleContent === index + 2 ? (
                          <FaAngleUp />
                        ) : (
                          <FaAngleDown />
                        )}
                      </span>
                    </span>
                    <span className="rightdown">20% completed</span>
                  </span>
                </span>
                <span className="brdiv-down">
                  <span className={"bar2"}></span>
                </span>
                {isDown && visibleContent === index + 2 ? (
                  <div className="br-content active">
                    <ul>
                      {[
                        "Video 1",
                        "Article 1",
                        "Quiz 1",
                        "Coding Exercise 1",
                        "Combined Resource 1",
                      ].map((item, idx) => (
                        <li key={idx}>
                          <span>
                            <PiPlayCircleLight className="brc-logo" />
                            <p>{item}</p>
                          </span>
                          <span className="subcon-dur">
                            <BsClock className="brc-logo" />
                            <p>10:00</p>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="brdiv" key={index + 3}>
                <span className="brdiv-up">
                  <span className="wabr-left">
                    <p className="wabrl-p1">PART 3</p>
                    <p className="wabrl-p2">Lorem Ipsum Dolor Sit Amet</p>
                  </span>
                  <span className="wabr-right">
                    <span className="rightup">
                      <BsClock />
                      <p>02:00:00</p>
                      <span className="conlogo">
                        <img src={contlogo} alt="conlogo" />
                      </span>
                      <p>Medium</p>
                      <FaRegCopy />
                      <p>12</p>
                      <span
                        key={index + 3}
                        className="arrow"
                        onClick={() => handleArrowClick(index + 3)}
                      >
                        {isDown === index + 3 &&
                        visibleContent === index + 3 ? (
                          <FaAngleUp />
                        ) : (
                          <FaAngleDown />
                        )}
                      </span>
                    </span>
                    <span className="rightdown">0% completed</span>
                  </span>
                </span>
                <span className="brdiv-down">
                  <span className={"bar3"}></span>
                </span>
                {isDown && visibleContent === index + 3 ? (
                  <div className="br-content active">
                    <ul>
                      {[
                        "Video 1",
                        "Article 1",
                        "Quiz 1",
                        "Coding Exercise 1",
                        "Combined Resource 1",
                      ].map((item, idx) => (
                        <li key={idx}>
                          <span>
                            <PiPlayCircleLight className="brc-logo" />
                            <p>{item}</p>
                          </span>
                          <span className="subcon-dur">
                            <BsClock className="brc-logo" />
                            <p>10:00</p>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ) : (
            <div className="empty-br"></div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default WorkArea;
