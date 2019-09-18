import {combineReducers} from 'redux';
import randomCountryReducer from './RandomCountryReducer';
import errorBoundryReducer from './ErrorBoundryReducer';
import countriesReducer from "./CountriesReducer";

export default combineReducers({
    randomCountry: randomCountryReducer,
    errorBoundry: errorBoundryReducer,
    countries: countriesReducer
});