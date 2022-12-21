import Movie from "./components/Movie";
import "./App.css";
import { useState, useEffect } from "react";

const FEATURED_API =
  "https://api.themoviedb.org/3/movie/550?api_key=db11c3b6c4cddd8e20896892df0c53fe";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=db11c3b6c4cddd8e20896892df0c53fe&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  return (
    <>
      <header>
        <input className="search" type="search" placeholder="Search..." />
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
