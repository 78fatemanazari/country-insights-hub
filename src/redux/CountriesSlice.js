import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countriesApi = response.data;
      const countriesFilter = [];
      countriesApi.forEach((country) => {
        const name = country.name.common;
        const capital = country.capital ? country.capital[0] : country.capital;
        const continent = country.continents ? country.continents[0] : country.continents;
        const { population } = country;
        const { area } = country;
        const timezones = country.timezones ? country.timezones[0] : country.timezones;
        const currencies = country.currencies ? Object.keys(country.currencies)[0] : null;
        const languages = country.languages ? Object.keys(country.languages)[0] : null;
        const flags = country.flags.svg;
        const { alt } = country.flags;
        countriesFilter.push(
          {
            name,
            capital,
            continent,
            population,
            timezones,
            currencies,
            languages,
            area,
            flags,
            alt,
          },
        );
      });
      return countriesFilter;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const CountriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    countriesfilter: [],
  },
  reducers: {
    filtercountries: (state, action) => {
      const countryname = action.payload;
      const filteredcountry = state.countries.filter(
        (acountry) => acountry.name.toLowerCase().includes(countryname.toLowerCase()),
      );
      return {
        countryfilter: filteredcountry,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
  },
});

export const { filtercountries } = CountriesSlice.actions;
export default CountriesSlice.reducer;
