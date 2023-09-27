import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { fetchCountries } from '../redux/CountriesSlice';
import goIcon from '../assets/images.png';
import '../styles/Countries.css';

function Countries() {
  const dispatch = useDispatch();
  const { countries } = useSelector((store) => store.countries);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

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
  console.log(filter);
  return (
    <div className="data-container">
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
                    {country.population / 100000}
                  </p>
                </div>
              </div>
              <img className="go-icon" src={goIcon} alt="go icon" width="50" height="50" />
            </div>
          ),
        )
      }
    </div>
  );
}

export default Countries;
