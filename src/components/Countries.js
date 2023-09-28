import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { filtercountries, fetchCountries } from '../redux/CountriesSlice';
import goIcon from '../assets/images.png';
import '../styles/Countries.css';

function Countries({ CountryClass }) {
  const dispatch = useDispatch();
  const { countries } = useSelector((store) => store.countries);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filterCountry = (countryName) => {
    dispatch(filtercountries(countryName));
  };

  const filter = countries.filter(
    (acountry) => acountry.name === 'Ireland'
      || acountry.name === 'Austria'
      || acountry.name === 'Portugal'
      || acountry.name === 'Mexico'
      || acountry.name === 'Finland'
      || acountry.name === 'France'
      || acountry.name === 'Spain'
      || acountry.name === 'Belgium'
      || acountry.name === 'China'
      || acountry.name === 'Japan'
      || acountry.name === 'Iran'
      || acountry.name === 'Colombia',
  );
  return (
    <div className={CountryClass} data-testid="countries-item">
      {
        filter.map(
          (country) => (
            <div key={nanoid()} className="countries-container">
              <div>
                <img src={country.flags} alt={country.alt} className="flags" width="300" height="200" />
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

Countries.propTypes = {
  CountryClass: PropTypes.string.isRequired,
};

export default Countries;
