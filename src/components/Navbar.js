import React from 'react';
import '../styles/Navbar.css';
import Mic from '../assets/mic.png';
import Setting from '../assets/setting.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <button className="year-btn" type="button">2015</button>
      </div>
      <div className="middle">
        <p className="title">Most Views</p>
      </div>
      <div className="right">
        <img className="mic" src={Mic} width="20" height="20" alt="mic" />
        <img className="setting" src={Setting} width="30" height="30" alt="setting icon" />
      </div>
    </div>
  );
}

export default Navbar;
