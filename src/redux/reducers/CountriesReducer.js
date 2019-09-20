import {
    FETCH_COUNTRIES_START,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_COUNTRIES_ERROR,
    RESET_COUNTRIES_DATA,
    ADD_COUNTRY_TO_FAVORITES,
    REMOVE_COUNTRY_FROM_FAVORITES,
    FETCH_COUNTRY_START,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_ERROR,
    SET_SELECTED_COUNTRIES
} from '../actions/ActionTypes';

const initialState = {
    loadingCountries: true,
    loadingCountry: true,
    error: false,
    country: null,
    countries: [],
    filteredCountries: [],
    favoriteCountries: [],
    countryFilters: [],
    selectedCountryFilter: null
};

export default function countriesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRIES_START:
            return {
                ...state,
                loadingCountries: true,
                error: false
            };
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                loadingCountries: false,
                error: false,
                countries: action.payload,
                filteredCountries: action.payload,
                countryFilters: action.countryFilters
            };
        case FETCH_COUNTRIES_ERROR:
            return {
                ...state,
                loadingCountries: false,
                error: true
            };
        case RESET_COUNTRIES_DATA:
            return {
                ...state,
                loadingCountries: true,
                loadingCountry: true,
                error: false,
                country: null,
                countries: [],
                filteredCountries: [],
                countryFilters: [],
                selectedCountryFilter: null
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
                loadingCountry: true,
                error: false
            };
        case FETCH_COUNTRY_SUCCESS:
            return {
                ...state,
                loadingCountry: false,
                error: false,
                country: action.payload
            };
        case FETCH_COUNTRY_ERROR:
            return {
                ...state,
                loadingCountry: false,
                error: true
            };
        case SET_SELECTED_COUNTRIES:
            return {
                ...state,
                selectedCountryFilter: action.filterName,
                filteredCountries: action.payload
            };
        default:
            return state;
    }
}