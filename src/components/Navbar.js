import React from 'react';
import Logo from '../assets/logo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <h1>Country Insights Hub</h1>
        <img src={Logo} width="200" height="150" alt="logo" />
      </nav>
    </div>
  );
}

export default Navbar;
