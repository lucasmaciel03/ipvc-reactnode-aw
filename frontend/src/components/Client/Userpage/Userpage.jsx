import React from "react";
import Informationuser from "../InformationUser/Informationuser";
import Movielike from "../MovieLike/Movielike";
import Serielike from "../SeriesLike/Serieslike.jsx";
import History from "../HistoryRent/Historyrent.jsx";
import "./userpage.css";
import { useState } from "react";

const Userpage = () => {
  const [isHiddenUserInfo, setIsHiddenUserInfo] = useState(true);
  const [isHiddenMovieLike, setIsHiddenMovieLike] = useState(true);
  const [isHiddenSerieLike, setIsHiddenSerieLike] = useState(true);
  const [isHiddenHistory, setIsHiddenHistory] = useState(true);

  function toggleHiddenUserInfo() {
    setIsHiddenUserInfo(!isHiddenUserInfo);
    setIsHiddenMovieLike(true);
    setIsHiddenSerieLike(true);
    setIsHiddenHistory(true);
  }

  function toggleHiddenMovieLike() {
    setIsHiddenMovieLike(!isHiddenMovieLike);
    setIsHiddenUserInfo(true);
    setIsHiddenSerieLike(true);
    setIsHiddenHistory(true);
  }

  function toggleHiddenSerieLike() {
    setIsHiddenSerieLike(!isHiddenSerieLike);
    setIsHiddenUserInfo(true);
    setIsHiddenMovieLike(true);
    setIsHiddenHistory(true);
  }

  function toggleHiddenHistory() {
    setIsHiddenHistory(!isHiddenHistory);
    setIsHiddenUserInfo(true);
    setIsHiddenMovieLike(true);
    setIsHiddenSerieLike(true);
  }

  return (
    <div className="userpage">
      <div className="userpage-text">
        <span>André</span>
      </div>
      <div className="nav-btns">
        <button className="btn-user" onClick={toggleHiddenUserInfo}>
          Information
        </button>
        <button className="btn-user" onClick={toggleHiddenMovieLike}>
          Movies
        </button>
        <button className="btn-user" onClick={toggleHiddenSerieLike}>
          Series
        </button>
        <button className="btn-user" onClick={toggleHiddenHistory}>
          History
        </button>
      </div>
      <div className="info-box">
        {!isHiddenUserInfo && <Informationuser />}
        {!isHiddenSerieLike && <Serielike />}
        {!isHiddenMovieLike && <Movielike />}
        {!isHiddenHistory && <History />}
      </div>
    </div>
  );
};

export default Userpage;
