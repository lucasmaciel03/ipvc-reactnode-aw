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
                <input
                  type="text"
                  id="movie-name"
                  name="movie-name"
                  placeholder="Movie Name"
                  readOnly="true"
                />
                <label htmlfor="movie-description">Description:</label>
                <input
                  type="text"
                  id="movie-description"
                  name="movie-description"
                  placeholder="Description"
                  readOnly="true"
                />
                <label htmlfor="movie-time ct-input">Duration:</label>
                <input
                  type="time"
                  id="movie-time"
                  name="movie-time"
                  placeholder="Duration"
                  readOnly="true"
                />
                <label htmlfor="movie-price ct-input">Movie Price:</label>
                <input
                  type="number"
                  id="movie-price"
                  name="movie-price"
                  placeholder="Movie Price"
                  readOnly="true"
                />
                <label htmlfor="movie-evaluation ct-input">Evaluation:</label>
                <input
                  type="number"
                  id="movie-evaluation"
                  name="movie-evaluation"
                  placeholder="Evaluation"
                  readOnly="true"
                />
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
