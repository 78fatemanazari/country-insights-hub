import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import goIcon from '../assets/images.png';
import { filtercountries, fetchCountries } from '../redux/CountriesSlice';
import '../styles/CountriesDetails.css';

function CountriesDetails({ Name, classN }) {
  const dispatch = useDispatch();
  const { countries } = useSelector((store) => store.countries);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filterName = Name.trim() !== '' ? countries.filter(
    (acountry) => acountry.name.toLowerCase().includes(Name.toLowerCase()),
  ) : [];

  const filterCountry = (countryName) => {
    dispatch(filtercountries(countryName));
  };

  return (
    <div className={classN} data-testid="country-details">
      {
        filterName.map(
          (country) => (
            <div key={nanoid()} className="countries-container">
              <div>
                <img src={country.flags} alt={country.alt} width="300" height="200" />
              </div>
              <div className="texts">
                <p className="countries-name">{country.name}</p>
                <div className="properties">
                  <p className="f-title">continent:</p>
                  <p className="continent">
                    {country.continent}
                  </p>
                  <p className="f-title">Population:</p>
                  <p className="continent">
                    {country.population / 1000000}
                  </p>
                </div>
              </div>
              <div>
                <NavLink to="/Details">
                  <button
                    className="go-icon"
                    type="button"
                    onClick={() => {
                      filterCountry(country.name);
                    }}
                  >
                    <img src={goIcon} alt="go icon" width="50" height="50" />
                  </button>
                </NavLink>
              </div>
            </div>
          ),
        )
      }
    </div>
  );
}

CountriesDetails.propTypes = {
  Name: PropTypes.string.isRequired,
  classN: PropTypes.string.isRequired,
};

export default CountriesDetails;
