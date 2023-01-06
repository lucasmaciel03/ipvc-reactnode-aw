import React from "react";
import "./userpage.css";

const userpage = () => {
  return (
    <div className="userpage">
      <div className="userpage-text">Name User</div>
      <div className="nav-btns">
        <button className="btn-user">Information</button>
        <button className="btn-user">Movies</button>
        <button className="btn-user">Series</button>
        <button className="btn-user">History</button>
      </div>
      <div className="info-box"></div>
    </div>
  );
};

export default userpage;
