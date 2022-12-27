import React from "react";
import Cards from "../Card/Cards";
import "./home.css";
import Categories from "../Categories/Categories.jsx";

function Home() {
  return (
    <div className="movies">
      <Categories></Categories>
      <div className="movie-text">Movies</div>
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

export default Home;
