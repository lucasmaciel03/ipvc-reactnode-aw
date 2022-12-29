import React from "react";
import Cards from "../Card/Cards";
import "./home.css";
import Categorie2 from "../Categories/Categorie2.jsx";

function Home() {
  return (
    <>
      <div className="movies">
        <div className="movie-text">Movies</div>
        <Categorie2></Categorie2>
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
    </>
  );
}

export default Home;
