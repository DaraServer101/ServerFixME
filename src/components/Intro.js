import React, { Component } from 'react';
import './CardSlider.css';

class Intro extends Component {
    render() {
        const myStyle={
            backgroundImage: `url(${require('./photo_2023-02-02_15-36-21.jpg')})`,
            height:'840px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return (
            <div style={myStyle} >
                <div className="intro-caption">
                    <h1>Looking for a nearby repair shop?</h1>
                    <p>We have all the information and locations that you are looking for.</p>
                    <p>Simply browse through <a href="/location">Location</a> or use our search engine to find specific places.</p>
                </div>
            </div>
        );
    }
}

export default Intro;
