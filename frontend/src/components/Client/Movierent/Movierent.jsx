import React from "react";
import "./movierent.css";
import Ironman from "../../../images/ironman.png";
import emptystar from "../../../images/estrelavazia.png";
import fullstar from "../../../images/estrelacheia.png";

const Movierent = () => {
  return (
    <div className="movierent">
      <section className="rent">
        <div className="rent-title">
          <h2>Rent a Movie</h2>
        </div>
        <div className="container">
          <form action="#" className="form-rent ativo" method="post" id="rent">
            <div className="movie-info">
              <div className="movie-image">
                <img src={Ironman}></img>
              </div>
              <div className="movie-info-rent">
                <label htmlfor="movie-name">
                  <p className="title-movie">Iron Man vs Captain America</p>
                </label>
                <label htmlfor="movie-description">
                  <p className="movie-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit officiis aperiam alias, quos incidunt commodi
                    maxime quibusdam laudantium similique, hic fugiat repellat
                    quam labore tempore officia minima at iste provident?
                  </p>
                </label>
                <div className="movie-evaluation">
                  <img className="starsize" src={fullstar}></img>
                  <img className="starsize" src={fullstar}></img>
                  <img className="starsize" src={fullstar}></img>
                  <img className="starsize" src={emptystar}></img>
                  <img className="starsize" src={emptystar}></img>
                </div>
                <label htmlfor="movie-condition">
                  <p className="movie-condition">
                    <b>Condition:</b> <span>Available</span>
                  </p>
                </label>
                <label htmlfor="movie-time">
                  <p className="movie-time">
                    <b>Time:</b> 2h:13m:21s
                  </p>
                </label>
                <label htmlfor="movie-price">
                  <p className="movie-price">7.50 €</p>
                </label>
              </div>
            </div>
            <div className="rent-movie">
              <button type="submit" className="submit">
                Rent
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Movierent;
