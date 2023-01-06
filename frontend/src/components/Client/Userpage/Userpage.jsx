import React from "react";
import Informationuser from "../InformationUser/Informationuser";
import "./userpage.css";

function activateBtn() {
  var btn = document.getElementById("myBtn");
  btn.classList.toggle("active");
}

function desactivateBtn() {
  var btn = document.getElementById("myBtn");
  btn.classList.remove("active");
}

const userpage = () => {
  return (
    <div className="userpage">
      <div className="userpage-text">
        <span>André</span>
      </div>
      <div className="nav-btns">
        <button id="myBtn" onClick={activateBtn} className="btn-user">
          Information
        </button>
        <button   className="btn-user">Movies</button>
        <button id="myBtn" className="btn-user">
          Series
        </button>
        <button id="myBtn" className="btn-user">
          History
        </button>
      </div>
      <div className="info-box">
        <Informationuser></Informationuser>
      </div>
    </div>
  );
};

export default userpage;
