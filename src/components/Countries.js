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
    (acountry) => acountry.name === 'United States'
      || acountry.name === 'Norway'
      || acountry.name === 'New Zealand'
      || acountry.name === 'Italy'
      || acountry.name === 'Finland'
      || acountry.name === 'France'
      || acountry.name === 'Spain'
      || acountry.name === 'Belgium'
      || acountry.name === 'China'
      || acountry.name === 'Japan',
  );
  console.log(filter);
  return (
    <div>
      {
        filter.map(
          (country) => (
            <div key={nanoid()}>
              <div>
                <img src={country.flags} alt={country.alt} />
              </div>
              <h1>{country.name}</h1>
              <h3>
                continent:
                {country.continent}
              </h3>
            </div>
          ),
        )
      }
    </div>
  );
}

export default Countries;
