import React from 'react';
import icon from './earth.png';
import './ErrorIndicator.scss'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator text-primary">
            <img src={icon} alt="error icon"/>
            <span className="boom">BOOM!</span>
            <span>something has gone terribly wrong</span>
            <span>(but we already fix it)</span>
        </div>
    );
};

export default ErrorIndicator;
