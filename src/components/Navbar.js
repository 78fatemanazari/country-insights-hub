import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="nav-items">
          <button type="button">Back</button>
          <h1>Country Insights Hub</h1>
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">Details</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
