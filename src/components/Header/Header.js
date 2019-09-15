import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Countries</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Africa <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Americas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Asia</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Europe</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Oceania</a>
                    </li>
                </ul>
                <ul className="navbar-nav mд-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">List of countries</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Favorite countries</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;