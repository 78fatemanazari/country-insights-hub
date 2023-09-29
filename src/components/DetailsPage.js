import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { fetchCountries } from '../redux/CountriesSlice';
import Back from '../assets/back.png';
import '../styles/DetailsPage.css';

function DetailsPage() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries.countryfilter);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <div data-testid="details-page" className="details-page">
      {
        countries.map(
          (country) => (
            <div key={nanoid()} className="details">
              <div className="flag-container">
                <NavLink to="/"><img className="back-icon" src={Back} alt="back icon" /></NavLink>
                <img src={country.flags} alt={country.alt} className="details-flag" />
              </div>
              <div className="info">
                <div className="infos">
                  <h2>
                    Name:
                  </h2>
                  <h2>
                    {country.name}
                  </h2>
                </div>
                <div className="infos">
                  <h2>
                    Capital:
                  </h2>
                  <h2>
                    {country.capital}
                  </h2>
                </div>
                <div className="infos">
                  <h2>
                    Population:
                  </h2>
                  <h2>
                    {country.population}
                  </h2>
                </div>
                <div className="infos">
                  <h2>
                    Area:
                  </h2>
                  <h2>
                    {country.area}
                  </h2>
                </div>
                <div className="infos">
                  <h2>
                    Timezone:
                  </h2>
                  <h2>
                    {country.timezones}
                  </h2>
                </div>
                <div className="infos">
                  <h2>
                    Currency:
                  </h2>
                  <h2>
                    {country.currencies}
                  </h2>
                </div>
                <div className="infos">
                  <h2>
                    Languages:
                  </h2>
                  <h2>
                    {country.languages}
                  </h2>
                </div>
              </div>
            </div>
          ),
        )
      }
    </div>
  );
}

export default DetailsPage;
