import React from "react";
import Informationuser from "../InformationUser/Informationuser";
import Movielike from "../MovieLike/Movielike";
import Serielike from "../SeriesLike/Serieslike.jsx";
import History from "../HistoryRent/Historyrent.jsx";
import "./userpage.css";
import { useState } from "react";

const Userpage = () => {
  const [isHidden, setIsHidden] = useState(true);
  function toggleHiddenuserinfo() {
    setIsHidden(!isHidden);
  }

  function toggleHiddenmovielike() {
    setIsHidden(!isHidden);
  }

  function toggleHiddenserielike() {
    setIsHidden(!isHidden);
  }

  function toggleHiddenhistory() {
    setIsHidden(!isHidden);
  }

  return (
    <div className="userpage">
      <div className="userpage-text">
        <span>André</span>
      </div>
      <div className="nav-btns">
        <button className="btn-user" onClick={toggleHiddenuserinfo}>
          Information
        </button>
        <button className="btn-user" onClick={toggleHiddenmovielike}>
          Movies
        </button>
        <button className="btn-user" onClick={toggleHiddenserielike}>
          Series
        </button>
        <button className="btn-user" onClick={toggleHiddenhistory}>
          History
        </button>
      </div>
      <div className="info-box">{!isHidden && <Informationuser />}</div>
      <div className="info-box">{!isHidden && <Serielike />}</div>
      <div className="info-box">{!isHidden && <Movielike />}</div>
      <div className="info-box">{!isHidden && <History />}</div>
    </div>
  );
};

export default Userpage;
