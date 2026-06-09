import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/booking" className="nav-link nav-link--active">Reserve a Table</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
