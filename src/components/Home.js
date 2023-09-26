import React from 'react';
import Navbar from './Navbar';
import Sliders from './Sliders';
import CountiresItem from './Countries';
import Footer from './Footer';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Sliders />
      <CountiresItem />
      <Footer />
    </div>
  );
}

export default Home;
