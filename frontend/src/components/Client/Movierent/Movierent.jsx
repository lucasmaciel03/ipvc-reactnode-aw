import React from "react";
import "./movierent.css";

const Movierent = () => {
  return (
    <div className="movierent">
      <section className="rent">
        <div className="rent-title">
          <h2>Rent a Movie</h2>
        </div>
        <div className="container">
          <form action="#" className="form-rent" method="post" id="rent">
            <div className="movie-info">
              <div className="movie-image"></div>
              <div className="movie-name">
                <label for="movie-name">Movie Name</label>
                <input
                  type="text"
                  id="movie-name"
                  name="movie-name"
                  placeholder="Movie Name"
                  readOnly="true"
                />
                <label for="movie-time">Movie Time</label>
                <input
                  type="time"
                  id="movie-time"
                  name="movie-time"
                  placeholder="Movie Time"
                  readOnly="true"
                />
                <label for="movie-price">Movie Price - &euro;</label>
                <input
                  type="number"
                  id="movie-price"
                  name="movie-price"
                  placeholder="Movie Price"
                  readOnly="true"
                />
                <label for="movie-evaluation">Evaluation</label>
                <input
                  type="number"
                  id="movie-evaluation"
                  name="movie-evaluation"
                  placeholder="Evaluation"
                  readOnly="true"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Movierent;
