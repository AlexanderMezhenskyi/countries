import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import {fetchRandomCountry} from "../../redux/actions/Actions";
import './RandomCountry.scss';

class RandomCountry extends Component {
    componentDidMount() {
        this.props.fetchRandomCountry();
        this.fetchInterval = setInterval(this.props.fetchRandomCountry, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.fetchInterval);
    }

    render() {
        const {country, loading, error} = this.props;
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <CountryView country={country}/> : null;

        return (
            <div className="random-country jumbotron rounded">
                <div className="container">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            </div>
        );
    }
}

const CountryView = ({country}) => {
    const {name, alpha3Code, capital, population, subregion, region, currencies, flag} = country;

    return (
        <>
            <img className="country-image"
                 src={flag}
                 alt="country" />
            <div>
                <h4>{name} - {alpha3Code}</h4>
                <ul className="list-group list-group-flush">
                    {currencies.map((currency,index) => {
                        return (<li className="list-group-item" key={index}>
                            <span className="term">Currency: </span>
                            <span>{currency.name}{currency.symbol ? ` - ${currency.symbol}` : null}</span>
                        </li>);
                    })}
                    <li className="list-group-item">
                        <span className="term">Capital: </span>
                        <span>{capital}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Population: </span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Subregion: </span>
                        <span>{subregion}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Region: </span>
                        <span>{region}</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

function mapStateToProps(state) {
    return {
        country: state.randomCountry.country,
        loading: state.randomCountry.loading,
        error: state.randomCountry.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchRandomCountry: () => dispatch(fetchRandomCountry())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomCountry);