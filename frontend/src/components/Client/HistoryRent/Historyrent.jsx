import React from "react";
import "./historyrent.css";
import Card from "../Card/Cards.jsx";

const Historyrent = () => {
  return (
    <div className="History-rent">
      <div className="title-history-rent">
        <h1>There were the movies you have rented</h1>
      </div>
      <div className="history-rent">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Historyrent;
