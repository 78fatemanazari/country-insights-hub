import React from 'react';
import Navbar from './Navbar';
import Sliders from './Sliders';
import Countries from './Countries';
import Footer from './Footer';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Sliders />
      <Countries />
      <Footer />
    </div>
  );
}

export default Home;
