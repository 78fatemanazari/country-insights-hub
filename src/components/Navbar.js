import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="nav-items">
          <button type="button">2015</button>
          <h1>Country Insights Hub</h1>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="Details">Details</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
