import React from 'react';
import './Spinner.css'
const Spinner = () => {
    return (
        <div className="spinner-border text-danger text-center spinner" role="status">
            <span className="visually-hidden"></span>
        </div>
    );
};

export default Spinner;