export default class RCApiService {
    _apiBase = 'https://restcountries.eu';
    _params = '?fields=name;flag;callingCodes;alpha3Code;capital;population;subregion;region;currencies;languages';

    getResource = async url => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        if (JSON.parse(localStorage.getItem('favoriteCountries')) === null) {
            localStorage.setItem('favoriteCountries', JSON.stringify([]));
        }

        return res.json();
    };

    getRandomCountry = async id => {
        const [country] = await this.getResource(`/rest/v2/callingcode/${id}${this._params}`);
        return RCApiService._transformCountry(country);
    };

    getCountriesByRegion = async region => {
        const result = await this.getResource(`/rest/v2/region/${region}${this._params}`);
        return result.map(RCApiService._transformCountry);
    };

    getCountriesByLanguage = async () => {
        const result = await this.getResource(`/rest/v2/all${this._params}`);
        return result;
    };

    getFavoritesCountries = async countriesList => {
        const result = await this.getResource(`/rest/v2/alpha?codes=${countriesList}`);
        return result.map(RCApiService._transformCountry);
    };

    getCountry = async countryName => {
        const [country] = await this.getResource(`/rest/v2/name/${countryName}${this._params}`);
        return RCApiService._transformCountry(country);
    };

    static _transformCountry = country => {
        return {
            id: country.callingCodes[0],
            name: country.name,
            flag: country.flag,
            alpha3Code: country.alpha3Code,
            capital: country.capital,
            population: country.population,
            subregion: country.subregion,
            region: country.region,
            currencies: country.currencies,
            languageName: country.languages[0].name
        }
    };
}