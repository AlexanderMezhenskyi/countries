import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import ContentRow from '../ContentRow/ContentRow';
import {fetchCountriesByRegion, resetCountriesData} from "../../redux/actions/Actions";

class OceaniaPage extends Component {
    componentDidMount() {
        const region = 'oceania';
        this.props.fetchCountriesByRegion(region);
    }

    componentWillUnmount() {
        this.props.resetCountriesData();
    }

    render() {
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
        countries: state.countries.countries,
        loading: state.countries.loading,
        error: state.countries.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCountriesByRegion: (region) => dispatch(fetchCountriesByRegion(region)),
        resetCountriesData: () => dispatch(resetCountriesData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OceaniaPage);
