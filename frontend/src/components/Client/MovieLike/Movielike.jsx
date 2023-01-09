import React from "react";
import "./movielike.css";
import Card from "../Card/Cards.jsx";

const Movielike = () => {
  return (
    <div className="Movies-like">
      <div className="title-movies-like">
        <h1>These were the movies you liked</h1>
      </div>
      <div className="movies-like">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Movielike;
