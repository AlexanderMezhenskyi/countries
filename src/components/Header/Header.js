import React from 'react';
import {NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/">Countries</NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/africa/">Africa</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/americas/">Americas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/asia/">Asia</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/europe/">Europe</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/oceania/">Oceania</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/countries-by-language/">Countries By Language</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/favorite-countries/">Favorite countries</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;