import React from 'react';
import connect from "react-redux/es/connect/connect";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {withRouter} from 'react-router-dom';
import Spinner from "../Spinner/Spinner";
import {addCountryToFavorites, removeCountryFromFavorites} from "../../redux/actions/Actions";
import './ItemList.scss';

const ItemList = (props) => {
    const {countries, loading, onItemSelected, addCountryToFavorites, removeCountryFromFavorites, location} = props;

    const items = countries.map((country, index) => {
        const {name, capital, languageName, alpha3Code} = country;

        return (
            <Card key={name}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                        {name}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body >
                        The capital is {capital}. Language - {languageName}
                        <ButtonToolbar className="justify-content-space mt-3">
                            <Button variant="primary" size="sm" className="mr-2" onClick={() => onItemSelected(name)}>More info</Button>
                            {/favorite-countries/i.test(location.pathname) ? (
                                <Button variant="danger" size="sm" className="mr-2" onClick={() => removeCountryFromFavorites(alpha3Code)}>Remove from favorites</Button>
                            ) : (
                                <Button variant="success" size="sm" className="mr-2" onClick={() => addCountryToFavorites(alpha3Code)}>Add to favorites</Button>
                            )}
                        </ButtonToolbar>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    });

    if (loading) {
        return <Spinner />;
    }

    return (
        <Accordion>
            {items}
        </Accordion>
    );
};

function mapStateToProps(state) {
    return {
        countries: state.countries.filteredCountries,
        loading: state.countries.loadingCountries,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addCountryToFavorites: (countryCode) => dispatch(addCountryToFavorites(countryCode)),
        removeCountryFromFavorites: (countryCode) => dispatch(removeCountryFromFavorites(countryCode))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemList));
