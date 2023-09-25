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
        const flags = country.flags.svg;
        const { alt } = country.flags;
        countriesFilter.push(
          {
            name,
            capital,
            continent,
            population,
            area,
            flags,
            alt,
          },
        );
      });
      console.log(countriesFilter[0].flags.svg);
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
  },
});

export default CountriesSlice.reducer;
