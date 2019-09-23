import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const navBar = React.createRef();

    function toggleNavBar() {
        navBar.current.classList.toggle('show');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/countries/">Countries</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"
                    onClick={toggleNavBar}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navBar}>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/countries/africa/">Africa</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/countries/americas/">Americas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/countries/asia/">Asia</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/countries/europe/">Europe</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/countries/oceania/">Oceania</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/countries/countries-by-language/">Countries By Language</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/countries/favorite-countries/">Favorite countries</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;