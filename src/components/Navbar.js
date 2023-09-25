import React from 'react';
import '../styles/Navbar.css';
import BackIcon from '../assets/back.png';
import Mic from '../assets/mic.png';
import Setting from '../assets/setting.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <img className="logo" src={BackIcon} width="15" height="20" alt="logo" />
        <p className="year">2015</p>
      </div>
      <div className="middle">
        <p className="year">Most Views</p>
      </div>
      <div className="right">
        <img className="mic" src={Mic} width="30" height="30" alt="mic" />
        <img className="setting" src={Setting} width="35" height="35" alt="setting icon" />
      </div>
    </div>
  );
}

export default Navbar;
