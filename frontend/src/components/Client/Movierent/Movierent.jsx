import React from "react";
import "./movierent.css";
import Ironman from "../../../images/ironman.png";

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
              <div className="movie-name ct-input">
                <label htmlfor="movie-name">Movie Name:</label>
                <p>Movie Name</p>
              </div>
              <div className="movie-description ct-input">
                <label htmlfor="movie-description">Description:</label>
                <p>Description</p>
              </div>
              <div className="movie-time ct-input">
                <label htmlfor="movie-time ct-input">Duration:</label>
                <p>2h:13m:21s</p>
              </div>
              <div className="movie-price ct-input">
                <label htmlfor="movie-price ct-input">Movie Price:</label>
                <p>Movie Price</p>
              </div>
              <div className="movie-evaluation ct-input">
                <label htmlfor="movie-evaluation ct-input">Evaluation:</label>
                <p>Evaluation</p>
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
