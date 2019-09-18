import {
    FETCH_COUNTRIES_START,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_COUNTRIES_ERROR,
    RESET_COUNTRIES_DATA,
    ADD_COUNTRY_TO_FAVORITES,
    REMOVE_COUNTRY_FROM_FAVORITES,
    FETCH_COUNTRY_START,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_ERROR
} from '../actions/ActionTypes';

const initialState = {
    loading: true,
    error: false,
    country: null,
    countries: [],
    favoriteCountries: []
};

export default function countriesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRIES_START:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                countries: action.payload
            };
        case FETCH_COUNTRIES_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        case RESET_COUNTRIES_DATA:
            return {
                ...state,
                loading: true,
                error: false,
                country: null,
                countries: []
            };
        case ADD_COUNTRY_TO_FAVORITES:
            return {
                ...state,
                favoriteCountries: [...state.favoriteCountries, action.payload]
            };
        case REMOVE_COUNTRY_FROM_FAVORITES:
            const favoriteCountriesArr = [...state.favoriteCountries],
                  index = favoriteCountriesArr.indexOf(action.payload);

            favoriteCountriesArr.splice(index, 1);

            return {
                ...state,
                favoriteCountries: favoriteCountriesArr
            };
        case FETCH_COUNTRY_START:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_COUNTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                country: action.payload
            };
        case FETCH_COUNTRY_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}