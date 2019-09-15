import {combineReducers} from 'redux';
import randomCountryReducer from './RandomCountryReducer';
import errorBoundryReducer from "./ErrorBoundryReducer";

export default combineReducers({
    randomCountry: randomCountryReducer,
    errorBoundry: errorBoundryReducer
});