import React from 'react';

const ContentRow = ({top, leftSide, rightSide}) => {
    return (
        <div className="container">
            <div className="row mb2">
                <div className="col-md-12">
                    {top}
                </div>
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

export default ContentRow;