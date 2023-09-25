import React from 'react';
import Navbar from './Navbar';
import Sliders from './Sliders';
import Countries from './Countries';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Sliders />
      <Countries />
      <footer className="footer">
        <p>This is footer part</p>
      </footer>
    </div>
  );
}

export default Home;
