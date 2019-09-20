import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import ContentRow from '../ContentRow/ContentRow';
import {fetchFavoritesCountries, resetCountriesData} from "../../redux/actions/Actions";

class FavoriteCountriesPage extends Component {
    componentDidMount() {
        const favoritesCountriesList = this.props.favoriteCountries.join(';');
        this.props.fetchFavoritesCountries(favoritesCountriesList);
    }

    componentDidUpdate(prevState) {
        if (prevState.favoriteCountries.length !== this.props.favoriteCountries.length) {
            const favoritesCountriesList = this.props.favoriteCountries.join(';');
            this.props.fetchFavoritesCountries(favoritesCountriesList);
        }
    }

    componentWillUnmount() {
        this.props.resetCountriesData();
    }

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

function mapStateToProps(state) {
    return {
        favoriteCountries: state.countries.favoriteCountries,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFavoritesCountries: (region) => dispatch(fetchFavoritesCountries(region)),
        resetCountriesData: () => dispatch(resetCountriesData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCountriesPage);
