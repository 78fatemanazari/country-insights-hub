import React from 'react';
import Navbar from './Navbar';
import Sliders from './Sliders';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Sliders />
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
