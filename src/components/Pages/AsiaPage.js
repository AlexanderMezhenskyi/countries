import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemFilters from "../ItemFilters/ItemFilters";
import ContentRow from '../ContentRow/ContentRow';
import {fetchCountriesByRegion, resetCountriesData} from "../../redux/actions/Actions";

class AsiaPage extends Component {
    componentDidMount() {
        const region = 'asia';
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
                top={<ItemFilters/>}
                leftSide={<ItemList onItemSelected={(name) => history.push(name)} />}
                rightSide={<ItemDetails itemName={name} />}
            />
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCountriesByRegion: (region) => dispatch(fetchCountriesByRegion(region)),
        resetCountriesData: () => dispatch(resetCountriesData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AsiaPage);
