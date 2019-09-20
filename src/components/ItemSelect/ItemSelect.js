import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {filterCountryByLanguage} from "../../redux/actions/Actions";
import './ItemSelect.scss';

class ItemSelect extends Component{
    render() {
        const {languageFilters, selectedlanguageFilter, filterCountryByLanguage} = this.props;

        const filters = languageFilters.map((filter, index) => {
            return (
                <option
                    key={filter}
                    value={filter}
                >
                    {filter}
                </option>
            );
        });

        return (
            <form>
                <div className="form-group w-50 mb-5">
                    <select className="form-control" id="item-select" value={selectedlanguageFilter} onChange={(event) => filterCountryByLanguage(event.target.value)}>
                        {filters}
                    </select>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        languageFilters: state.countries.languageFilters,
        selectedlanguageFilter: state.countries.selectedlanguageFilter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterCountryByLanguage: (filterName) => dispatch(filterCountryByLanguage(filterName))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemSelect);