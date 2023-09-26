import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './CountriesSlice';

const rootReducer = {
  countries: countriesReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
