import React from "react";
import "./serieslike.css";
import Card from "../Card/Cards.jsx";

const Serieslike = () => {
  return (
    <div className="Series-like">
      <div className="title-series-like">
        <h1>These were the series you liked</h1>
      </div>
      <div className="series-like">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Serieslike;
