import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import ContentRow from '../ContentRow/ContentRow';
import {fetchFavoritesCountries, resetCountriesData} from "../../redux/actions/Actions";

class FavoriteCountriesPage extends Component {
    componentDidMount() {
        if (this.props.favoriteCountries.length) {
            this.fetchCountries();
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.favoriteCountries.length !== this.props.favoriteCountries.length) {
            this.fetchCountries();
        }
    }

    componentWillUnmount() {
        this.props.resetCountriesData();
    }

    fetchCountries = () => {
        const favoritesCountriesList = this.props.favoriteCountries.join(';');
        this.props.fetchFavoritesCountries(favoritesCountriesList);
    };

    render() {
        if (!this.props.favoriteCountries.length) {
            return (
                <div className="alert alert-danger w-50 mx-auto my-5" role="alert">
                    The list of favorites countries is empty. Please add countries to your favorites!
                </div>
            );
        }

        const {history, match} = this.props;
        const {name} = match.params;

        return (
            <ContentRow
                leftSide={<ItemList onItemSelected={(name) => history.push(name)} />}
                rightSide={<ItemDetails itemName={name} />}
            />
        );
    }
}

function mapStateToProps() {
    return {
        favoriteCountries: JSON.parse(localStorage.getItem('favoriteCountries'))
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFavoritesCountries: (region) => dispatch(fetchFavoritesCountries(region)),
        resetCountriesData: () => dispatch(resetCountriesData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCountriesPage);
