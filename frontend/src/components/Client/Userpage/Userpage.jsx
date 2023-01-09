import React from "react";
import Informationuser from "../InformationUser/Informationuser";
import Movielike from "../MovieLike/Movielike";
import Serielike from "../SeriesLike/Serieslike.jsx";
import History from "../HistoryRent/Historyrent.jsx";
import "./userpage.css";
import { useState } from "react";

const Userpage = () => {
  const [currentTab, setCurrentTab] = useState("info");

  return (
    <div className="userpage">
      <div className="userpage-text">
        <span>André</span>
      </div>
      <div className="nav-btns">
        <button className="btn-user" onClick={() => setCurrentTab("info")}>
          Information
        </button>
        <button className="btn-user" onClick={() => setCurrentTab("movies")}>
          Movies
        </button>
        <button className="btn-user" onClick={() => setCurrentTab("series")}>
          Series
        </button>
        <button className="btn-user" onClick={() => setCurrentTab("history")}>
          History
        </button>
      </div>
      <div className="info-box">
        {currentTab === "info" && <Informationuser />}
        {currentTab === "movies" && <Serielike />}
        {currentTab === "series" && <Movielike />}
        {currentTab === "history" && <History />}
      </div>
    </div>
  );
};

export default Userpage;
