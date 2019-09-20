import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {filterCountryBySubregion} from "../../redux/actions/Actions";
import './ItemSelect.scss';

class ItemSelect extends Component{
    render() {
        // const {countryFilters, selectedCountryFilter, filterCountryBySubregion} = this.props;
        //
        // const filters = countryFilters.map((filter) => {
        //     const cls = filter === selectedCountryFilter ? 'btn-info' : 'btn-outline-info';
        //
        //     return (
        //         <button
        //             key={filter}
        //             type="button"
        //             value={filter}
        //             className={`btn ${cls}`}
        //             onClick={() => filterCountryBySubregion(filter)}
        //         >
        //             {filter}
        //         </button>
        //     );
        // });

        return (
            <form>
                <div className="form-group w-50 mb-5">
                    <label htmlFor="item-select">Select Language</label>
                    <select className="form-control" id="item-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        filterCountryBySubregion: (filterName) => dispatch(filterCountryBySubregion(filterName))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemSelect);