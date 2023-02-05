import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './About.css'

function About() {
    return (
        <>
            <Header/>
            <div className="aboutus">
                <div id="banner">
                    <div className="hero-image">
                        <div className="hero-text">
                            <p>Welcome to the</p>
                            <p>story of our journey</p>
                        </div>
                    </div>
                </div>

                <div id="info-content">
                    <div className="info-box">
                        <div className="back-image"></div>
                        <div className="front-image"></div>

                        <div className="title-what_we_do">
                            What we do
                        </div>

                        <div className="what-we-do">
                            The Fix Me team is made up of a highly accomplished team
                            of engineers, researchers, strategists, designers, and
                            builders all committed to delivering universal and equitable
                            access to decentralization that is capable of scaling for
                            billions of people.
                        </div>

                        <div className="title-mission">
                            Our mission
                        </div>
                        <div className="our-mission">
                            Our team is providing helpful information in order to help
                            individuals issues with finding the right location of a
                            nearby repair shop.
                        </div>
                    </div>
                </div>

                <div id="team">
                    <div className="team-title">
                        Our Team
                    </div>
                    <div className="team-box">

                        <div className="member-box">
                             {/*<div style="background-image: url(/dara.jpg)" className="photo"></div>*/}
                            <div className="team-name">
                                Sor Chandara
                            </div>
                        </div>

                        <div className="member-box">
                             {/*<div style="background-image: url("./sokim.jpg")" className="photo"></div>*/}
                            <div className="team-name">
                                Neak Sokkim
                            </div>
                        </div>

                        <div className="member-box">
                             {/*<div style="background-image: url("./kim.jpg")" className="photo"></div>*/}
                            <div className="team-name">
                                Teb Yuma
                            </div>
                        </div>

                        <div className="member-box">
                             {/*<div style="background-image: url(${require('./vong.jpg')})" className="photo"></div>*/}
                            <div className="team-name">
                                Chan Pothivong
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default About;