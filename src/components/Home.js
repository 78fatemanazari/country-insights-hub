import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="header">
        <p>This is header part</p>
      </div>
      <div className="countries-container">
        <p>This is countries part</p>
      </div>
      <footer className="footer">
        <p>This is footer part</p>
      </footer>
    </div>
  );
}

export default Home;
