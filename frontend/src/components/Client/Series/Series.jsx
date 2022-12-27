import React from "react";
import Cards from "../Card/Cards.jsx";
import "./series.css";
import Categories from "../Categories/Categories.jsx";

function Series() {
  return (
    <div className="series">
      <Categories></Categories>
      <div className="series-text">Series</div>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
    </div>
  );
}

export default Series;
