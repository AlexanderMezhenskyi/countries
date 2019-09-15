export default class RCApiService {
    _apiBase = 'https://restcountries.eu';

    getResource = async url => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return res.json();
    };

    getCountry = async id => {
        const [country] = await this.getResource(`/rest/v2/callingcode/${id}?fields=name;flag;callingCodes;alpha3Code;capital;population;subregion;currencies`);
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
            currencies: country.currencies
        }
    };
}