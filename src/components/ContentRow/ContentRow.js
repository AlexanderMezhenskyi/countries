import React from 'react';

const Row = ({leftSide, rightSide}) => {
    return (
        <div className="container">
            <div className="row mb2">
                <div className="col-md-6">
                    {leftSide}
                </div>
                <div className="col-md-6">
                    {rightSide}
                </div>
            </div>
        </div>
    );
};

export default Row;