import axios from 'axios';
import countriesReducer, { fetchCountries, filtercountries } from './CountriesSlice';

jest.mock('axios');

describe('fetchCountries action', () => {
  it('should fetch countries successfully', async () => {
    const initialState = {
      countries: [],
      countriesfilter: [],
    };
    const action = {
      type: 'countries/fetchCountries/fulfilled',
      payload: [
        {
          id: 1,
          name: 'Austria',
        },

      ],
    };

    const newState = countriesReducer(initialState, action);
    expect(newState.countries).toEqual([{ id: 1, name: 'Austria' }]);
  });

  it('should handle fetch countries failure', async () => {
    const errorResponse = { status: 404, data: 'Not Found' };

    axios.get.mockRejectedValue(errorResponse);

    const dispatch = jest.fn();
    const getState = jest.fn();

    try {
      await fetchCountries()(dispatch, getState, undefined);
    } catch (error) {
      expect(dispatch).toHaveBeenCalledWith(fetchCountries.rejected(error));
    }
  });
});
describe('countriesReducer', () => {
  it('should handle fetchCountries fulfilled', () => {
    const initialState = {
      countries: [],
      countriesfilter: [],
    };
    const countriesData = [
      {
        name: 'Austria',
        continent: 'Europe',
      },
      {
        name: 'Ireland',
        continent: 'Europe',
      },
    ]; // Define your mock countries data here

    const action = fetchCountries.fulfilled(countriesData);

    const newState = countriesReducer(initialState, action);

    expect(newState.countries).toEqual(countriesData);
  });

  it('should handle filtercountries', () => {
    const countryName = 'French Polynesia';
    const expectedAction = {
      type: 'countries/filtercountries',
      payload: countryName,
    };
    expect(filtercountries(countryName)).toEqual(expectedAction);
  });
});
