import React from 'react';
import Header from './Header';
import CardSlider from './CardSlider';
import Intro from './Intro';
import Footer from './Footer';


function Home() {
    return (
        <>
            <Header/>

            <Intro/>

            <div className="featured-shop-text">
                <h1>Featured Shops</h1>
                <p>Explore various shops with our suggestion</p>
            </div>

            <CardSlider/>

            <div class="contact-us">
                <div class="contact-intro">
                    <h1>Contact Us</h1>
                    <p>Want your shop to be listed here?</p>
                    <p>Get in contact with us now to get started!</p>
                </div>

                <div class="contact-info">
                    <p>Address: Street Norodom, Sangkat Tonle Basak, Khan Chamkarmon, Phnom Penh</p>
                    <p>Email: fixmebusiness@gmail.com</p>
                    <p>Tel: 098 7654 321</p>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Home;