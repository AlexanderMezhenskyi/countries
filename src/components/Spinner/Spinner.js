import React from 'react';
import './Spinner.scss';

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center w-100">
            <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;