import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import Spinner from "../Spinner/Spinner";
import {fetchCountry} from "../../redux/actions/Actions";
import './ItemDetails.scss';


class ItemDetails extends Component {
    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemName !== prevProps.itemName) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemName} = this.props;

        if (!itemName) return;

        this.props.fetchCountry(itemName);
    }

    render() {
        const {country, loading} = this.props;

        if (!country) {
            return <span className="select-country-text">Select a country from a list</span>;
        }

        if (loading) {
            return <Spinner />;
        }

        const {name, capital, population, subregion, region, currencies, flag} = country;

        return (
            <div className="item-details card">
                <img className="item-image"
                     src={flag}
                     alt="flag"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {currencies.map((currency,index) => {
                            return (
                                <li className="list-group-item" key={index}>
                                <span className="term">Currency: </span>
                                <span>{currency.name}{currency.symbol ? ` - ${currency.symbol}` : null}</span>
                                </li>
                            );
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
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        country: state.countries.country,
        loading: state.countries.loadingCountry,
        error: state.countries.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCountry: (country) => dispatch(fetchCountry(country)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);

