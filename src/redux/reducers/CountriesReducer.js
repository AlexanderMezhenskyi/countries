import {
    FETCH_COUNTRIES_START,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_COUNTRIES_ERROR,
    RESET_COUNTRIES_DATA,
    FETCH_COUNTRY_START,
    FETCH_COUNTRY_SUCCESS,
    FETCH_COUNTRY_ERROR,
    SET_SELECTED_COUNTRIES,
    FETCH_COUNTRIES_BY_LANGUAGE_SUCCESS,
    FILTER_COUNTRY_BY_LANGUAGE_SUCCESS
} from '../actions/ActionTypes';

const initialState = {
    loadingCountries: true,
    loadingCountry: true,
    error: false,
    country: null,
    countries: [],
    filteredCountries: [],
    countryFilters: [],
    selectedCountryFilter: null,
    languageFilters: [],
    selectedlanguageFilter: ''
};

export default function countriesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRIES_START:
            return {
                ...state,
                loadingCountries: true,
                country: null,
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
                selectedCountryFilter: null,
                languageFilters: []
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
                loadingCountries: false,
                loadingCountry: false,
                selectedCountryFilter: action.filterName,
                filteredCountries: action.payload
            };
        case FETCH_COUNTRIES_BY_LANGUAGE_SUCCESS:
            return {
                ...state,
                loadingCountries: false,
                error: false,
                countries: action.payload,
                filteredCountries: action.payload,
                languageFilters: action.languageFilters
            };
            case FILTER_COUNTRY_BY_LANGUAGE_SUCCESS:
                return {
                    ...state,
                    loadingCountries: false,
                    error: false,
                    countries: action.payload,
                    filteredCountries: action.payload,
                    selectedlanguageFilter: action.selectedlanguageFilter
                };
        default:
            return state;
    }
}