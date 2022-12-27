import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header>
        <Link to="/" className="removeuln">
          MovieAL
        </Link>
        <div className="group">
          <ul className="navigation">
            <li>
              <Link to="/" className="movies-active">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/series" className="series-active">
                Series
              </Link>
            </li>
            <li>
              <Link to="/login" className="login-active">
                Login
              </Link>
            </li>
          </ul>
          <div className="searchBox">
            <input type="search" placeholder="Search here..."></input>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
