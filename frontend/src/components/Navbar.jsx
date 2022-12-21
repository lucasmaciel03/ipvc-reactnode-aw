import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header>
        <Link to="/" className="removeuln">
          <a href="#" className="logo">
            MovieAL
          </a>
        </Link>
        <div className="group">
          <ul className="navigation">
            <li>
              <Link to="/">
                <a href="#">Filmes</a>
              </Link>
            </li>
            <li>
              <Link to="/series">
                <a href="#">Series</a>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <a>Login</a>
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
