import React from "react";
import "../styles/navbar.css";
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
              <Link to="/">

                  Filmes

              </Link>
            </li>
            <li>
              <Link to="/series">

                  Séries

              </Link>
            </li>
            <li>
              <Link to="/login">

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
