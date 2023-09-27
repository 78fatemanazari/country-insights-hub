import React from 'react';
import Countries from './Countries';

import Navbar from './Navbar';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Countries />
    </div>
  );
}

export default Home;
