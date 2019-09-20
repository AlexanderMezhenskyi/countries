import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {withRouter} from 'react-router-dom';
import {filterCountryBySubregion} from "../../redux/actions/Actions";
import './ItemFilters.scss';

class ItemFilters extends Component{
    render() {
        const {countryFilters, selectedCountryFilter, filterCountryBySubregion} = this.props;

        const filters = countryFilters.map((filter) => {
            const cls = filter === selectedCountryFilter ? 'btn-info' : 'btn-outline-info';

            return (
                <button
                    key={filter}
                    type="button"
                    value={filter}
                    className={`btn ${cls}`}
                    onClick={() => filterCountryBySubregion(filter)}
                >
                    {filter}
                </button>
            );
        });

        return (
            <div className="btn-group mb-5">
                {filters}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        countryFilters: state.countries.countryFilters,
        selectedCountryFilter: state.countries.selectedCountryFilter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterCountryBySubregion: (filterName) => dispatch(filterCountryBySubregion(filterName))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemFilters));