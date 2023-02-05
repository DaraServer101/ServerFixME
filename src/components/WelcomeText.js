import React from 'react';
import './WelcomeText.css';

const WelcomeText = () => {
    return (
        <div className="welcome-text-container">
            <h1 className="welcome-text-header">
                Are You Looking For a Repair Shop?
            </h1>
            <p className="welcome-text-body">
                We have all the information and locations that you are looking for. Simply browse through our Locations or use our search engine to find specific places.
            </p>
        </div>
    );
};

export default WelcomeText;
