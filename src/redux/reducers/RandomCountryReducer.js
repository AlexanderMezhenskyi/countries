import {RANDOM_COUNTRY_LOADED, RANDOM_COUNTRY_ERROR} from '../actions/ActionTypes';

const initialState = {
    country: {},
    loading: true,
    error: false
};

export default function randomCountryReducer(state = initialState, action) {
    switch (action.type) {
        case RANDOM_COUNTRY_LOADED:
            return {
                ...state,
                country: action.payload,
                loading: false,
                error: false
            };
        case RANDOM_COUNTRY_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}