import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { fetchCountries } from '../redux/CountriesSlice';

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
      || acountry.name === 'Japan',
  );
  console.log(filter);
  return (
    <div className="data-container">
      {
        filter.map(
          (country) => (
            <div key={nanoid()} className="countries-container">
              <div>
                <img src={country.flags} alt={country.alt} className="flags" />
              </div>
              <div>
                <p className="countries-name">{country.name}</p>
                <p className="continent">
                  continent:
                  {country.continent}
                </p>
              </div>
            </div>
          ),
        )
      }
    </div>
  );
}

export default Countries;
