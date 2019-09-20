import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemSelect from '../ItemSelect/ItemSelect';
import ContentRow from '../ContentRow/ContentRow';
import {fetchCountriesByLanguage, resetCountriesData} from "../../redux/actions/Actions";

class CountriesByLanguagePage extends Component {
    componentDidMount() {
        const language = 'en';
        this.props.fetchCountriesByLanguage(language);
    }

    componentWillUnmount() {
        this.props.resetCountriesData();
    }

    render() {
        const {history, match} = this.props;
        const {name} = match.params;

        return (
            <ContentRow
                top={<ItemSelect/>}
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
        fetchCountriesByLanguage: (language) => dispatch(fetchCountriesByLanguage(language)),
        resetCountriesData: () => dispatch(resetCountriesData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesByLanguagePage);
