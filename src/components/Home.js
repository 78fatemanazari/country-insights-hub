import React, { useState } from 'react';
import Countries from './Countries';
import CountriesDetails from './CountriesDetails';
import '../styles/Countries.css';
import '../styles/CountriesDetails.css';

function Home() {
  const [nameValue, setNameValue] = useState('');
  const getName = (e) => {
    const capitalizedInput = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setNameValue(capitalizedInput);
  };
  return (
    <div className="home">
      <div className="search-container">
        <input type="text" onChange={getName} value={nameValue} placeholder="Search country by name.." />
      </div>
      <Countries CountryClass={nameValue.trim() === '' ? 'country-container' : 'hide'} />
      <CountriesDetails Name={nameValue} classN={nameValue.trim() !== '' ? 'country-containerd detail' : 'hide'} />
    </div>
  );
}

export default Home;
