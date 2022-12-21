import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <a href="#" className="logo">
          MovieAL
        </a>
        <div className="group">
          <ul className="navigation">
            <li>
              <a href="#">Filmes</a>
            </li>
            <li>
              <a href="#">Series</a>
            </li>
            <li>
              <a href="#">Login</a>
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
