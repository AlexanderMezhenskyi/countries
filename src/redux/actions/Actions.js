import RCApiService from '../../services/RCApiService';
import {
    RANDOM_COUNTRY_LOADED,
    RANDOM_COUNTRY_ERROR,
    ERROR_BOUNDRY_HAS_ERROR,
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

const rcApiService = new RCApiService();

export function fetchRandomCountry() {
    const callingCodes = ["93", "358", "355", "213", "1684", "376", "244", "1264", "672", "1268", "54", "374", "297", "61", "43", "994", "1242", "973", "880", "1246", "375", "32", "501", "229", "1441", "975", "591", "5997", "387", "267", "", "55", "246", "", "1284", "1 340", "673", "359", "226", "257", "855", "237", "1", "238", "1345", "236", "235", "56", "86", "61", "61", "57", "269", "242", "243", "682", "506", "385", "53", "599", "357", "420", "45", "253", "1767", "1809", "593", "20", "503", "240", "291", "372", "251", "500", "298", "679", "358", "33", "594", "689", "", "241", "220", "995", "49", "233", "350", "30", "299", "1473", "590", "1671", "502", "44", "224", "245", "592", "509", "", "379", "504", "852", "36", "354", "91", "62", "225", "98", "964", "353", "44", "972", "39", "1876", "81", "44", "962", "76", "254", "686", "965", "996", "856", "371", "961", "266", "231", "218", "423", "370", "352", "853", "389", "261", "265", "60", "960", "223", "356", "692", "596", "222", "230", "262", "52", "691", "373", "377", "976", "382", "1664", "212", "258", "95", "264", "674", "977", "31", "687", "64", "505", "227", "234", "683", "672", "850", "1670", "47", "968", "92", "680", "970", "507", "675", "595", "51", "63", "64", "48", "351", "1787", "974", "383", "262", "40", "7", "250", "590", "290", "1869", "1758", "590", "508", "1784", "685", "378", "239", "966", "221", "381", "248", "232", "65", "1721", "421", "386", "677", "252", "27", "500", "82", "211", "34", "94", "249", "597", "4779", "268", "46", "41", "963", "886", "992", "255", "66", "670", "228", "690", "676", "1868", "216", "90", "993", "1649", "688", "256", "380", "971", "44", "1", "598", "998", "678", "58", "84", "681", "212", "967", "260", "263"]
    const id = callingCodes[Math.floor(Math.random() * 250)];

    return async dispatch => {
        rcApiService
            .getRandomCountry(id)
            .then(res => dispatch(randomCountryLoaded(res)))
            .catch(err => dispatch(randomCountryError(err)));
    }
}

export function randomCountryLoaded (country) {
    return {
        type: RANDOM_COUNTRY_LOADED,
        payload: country
    }
}

export function randomCountryError (err) {
    return {
        type: RANDOM_COUNTRY_ERROR
    }
}

export function setErrorBoundryState() {
    return {
        type: ERROR_BOUNDRY_HAS_ERROR
    }
}

export function fetchCountriesByRegion(region) {
    return async dispatch => {
        dispatch(fetchCountriesStart());

        rcApiService
            .getCountriesByRegion(region)
            .then(res => dispatch(fetchCountriesSuccess(res)))
            .catch(err => dispatch(fetchCountriesError(err)));
    }
}

export function fetchCountriesByLanguage() {
    return async dispatch => {
        dispatch(fetchCountriesStart());

        rcApiService
            .getCountriesByLanguage()
            .then(res => dispatch(fetchCountriesByLanguageSuccess(res)))
            .catch(err => dispatch(fetchCountriesError(err)));
    }
}

export function fetchCountriesByLanguageSuccess(countries) {
    const languageFilters = [];

    countries.forEach(country => {
        country.languages.forEach((language) => {
            const languageFilter = `${language.name} - ${language.iso639_2}`;

            if (languageFilters.indexOf(languageFilter) === -1 ) {
                languageFilters.push(languageFilter);
            }
        });
    });

    return {
        type: FETCH_COUNTRIES_BY_LANGUAGE_SUCCESS,
        payload: countries,
        languageFilters: languageFilters
    }
}

export function filterCountryByLanguage(languageName) {
    const languageCode = /\w{3}$/g.exec(languageName)[0];

    return async dispatch => {
        dispatch(fetchCountriesStart());

        rcApiService
            .getCountriesByLanguageCode(languageCode)
            .then(res => dispatch(filterCountryByLanguageSuccess(res, languageName)))
            .catch(err => dispatch(fetchCountriesError(err)));
    }
}

export function filterCountryByLanguageSuccess(countries, languageName) {
    return {
        type: FILTER_COUNTRY_BY_LANGUAGE_SUCCESS,
        payload: countries,
        selectedlanguageFilter: languageName
    }
}

export function fetchCountriesStart() {
    return {
        type: FETCH_COUNTRIES_START
    }
}

export function fetchCountriesSuccess(countries) {
    const countryFilters = [];

    countries.forEach(country => {
        if (countryFilters.indexOf(country.subregion) === -1 ) {
            countryFilters.push(country.subregion);
        }
    });

    return {
        type: FETCH_COUNTRIES_SUCCESS,
        payload: countries,
        countryFilters: countryFilters
    }
}

export function fetchCountriesError(err) {
    return {
        type: FETCH_COUNTRIES_ERROR
    }
}

export function resetCountriesData() {
    return {
        type: RESET_COUNTRIES_DATA
    }
}

export function fetchFavoritesCountries(countriesList) {
    return async dispatch => {
        dispatch(fetchCountriesStart());

        rcApiService
            .getFavoritesCountries(countriesList)
            .then(res => dispatch(fetchCountriesSuccess(res)))
            .catch(err => dispatch(fetchCountriesError(err)));
    }
}

export function fetchCountry(countryName) {
    return async dispatch => {
        dispatch(fetchCountryStart());

        rcApiService
            .getCountry(countryName)
            .then(res => dispatch(fetchCountrySuccess(res)))
            .catch(err => dispatch(fetchCountryError(err)));
    }
}

export function fetchCountryStart() {
    return {
        type: FETCH_COUNTRY_START
    }
}

export function fetchCountrySuccess(country) {
    return {
        type: FETCH_COUNTRY_SUCCESS,
        payload: country
    }
}

export function fetchCountryError(err) {
    return {
        type: FETCH_COUNTRY_ERROR
    }
}

export function filterCountryBySubregion(filterName) {
    return (dispatch, getState) => {
        const state = getState().countries;
        const filteredCountries = state.countries.filter((country) => country.subregion === filterName);

        dispatch(fetchCountriesStart());
        dispatch(fetchCountryStart());
        dispatch(setSelectedCountryies(filterName, filteredCountries));
    }
}

export function setSelectedCountryies(filterName, countries) {
    return {
        type: SET_SELECTED_COUNTRIES,
        payload: countries,
        filterName: filterName
    }
}