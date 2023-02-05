import React, { useState } from 'react';
import './CardSlider.css';

const cards = [
    {
        id: 1, title: 'Fixit', details: '1234 Main St, Los Angeles, CA 90001, (310) 123-4567',
        image: 'https://fastly.picsum.photos/id/382/460/620.jpg?hmac=HwU5LasuUhWUEuiior1fgZj1bxeZ3hSuu0aKQO1t6f8'
    },
    {
        id: 2, title: 'PhnomPenh Garage', details: '5678 Ocean Ave, San Francisco, CA 94121, (415) 678-9012',
        image: 'https://fastly.picsum.photos/id/133/460/620.jpg?hmac=G4avNFuqzeVZjFQpAiY9Z-5ao9hbjPJuV3QXVr09E_k'
    },
    {
        id: 3, title: 'Car Care', details: '9012 Mountain Rd, Denver, CO 80201, (303) 901-2345',
        image:'https://fastly.picsum.photos/id/111/460/620.jpg?hmac=cUurri25Jdd1P11ElpkrsLTcXK6Mnp9djNBKegUZox4'
    },
    {
        id: 4, title: 'Repair', details: '3456 Hill St, Seattle, WA 98104, (206) 345-6789',
        image: 'https://fastly.picsum.photos/id/183/460/620.jpg?hmac=VMCJQJBBjGhEUdRMat1S-MaDdWVlSP5mdkXvQhsl7ME'
    },
    {
        id: 5, title: 'iFix', details: '6789 River Ave, Austin, TX 78701, (512) 678-9012',
        image: 'https://fastly.picsum.photos/id/555/460/620.jpg?hmac=cb03p8majeCsPIpoUChukU5D6sbcp1Cx0Lz2mPwMPbc'
    },
    {
        id: 6, title: 'Car Station', details: '0123 Valley St, Chicago, IL 60601, (312) 012-3456',
        image: 'https://fastly.picsum.photos/id/605/460/620.jpg?hmac=e9jB0kMOx0aTS_qVGeU2pHDKFtqKQZaT1H5LQuYKLkc'
    },
];

const CardSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prevIndex =>
            prevIndex + 3 >= cards.length ? 0 : prevIndex + 3
        );
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex =>
            prevIndex - 3 < 0 ? (cards.length - 3) : prevIndex - 3
        );
    };

    return (
        <>
            <div className="slider-container">
                <button onClick={handlePrev} className="arrow-button">

                </button>
                <div className="card-container">
                    {cards.slice(currentIndex, currentIndex + 3).map(card => (
                        <div key={card.id} className="card">
                            <img src={card.image} alt={card.title}/>
                            <p><strong>Name:</strong> {card.title}</p>
                            <p><strong>Address:</strong> {card.details.split(', ').slice(0, -1).join(', ')}</p>
                            <p><strong>Telephone:</strong> {card.details.split(', ').slice(-1)}</p>
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} className="arrow-button">

                </button>
            </div>

            {/*Phnom Penh cards*/}
            <div className="phnom-penh-shop">
                <h1 className="shop-text">Phnom Penh</h1>
                <div className="phnom-penh-card-row1">
                    <div className="phnom-penh-card">
                        <img src="https://fastly.picsum.photos/id/555/360/240.jpg?hmac=gST9ZgyJJKsc3pYj_OUi5Cfk9FO7aoGhvFjkv7wrDMQ" alt="img-pp1" />
                        <p>Reliable and affordable vehicle repair services</p>
                        <p>Name: Auto Fix Solutions</p>
                        <p>Tel: +855 023 456 789</p>
                        <p>Address: #11, Street 12, Phnom Penh</p>
                    </div>
                    <div className="phnom-penh-card">
                        <img src="https://fastly.picsum.photos/id/857/360/240.jpg?hmac=FeBtLSzAYEzDpF2FnIPS_A4iWybhvUwN9HfYLNRWN8w" alt="img-pp2" />
                        <p>Experienced technicians for all car models</p>
                        <p>Name: Car Care Center</p>
                        <p>Tel: +855 012 654 321</p>
                        <p>Address: #25, Street 46, Phnom Penh</p>
                    </div>
                    <div className="phnom-penh-card">
                        <img src="https://fastly.picsum.photos/id/371/360/240.jpg?hmac=-LbqeLkQ8LfpsZ4VL2glMkB1sGXZH9r7Qxl2Jl6Ef08" alt="img-pp3" />
                        <p>24/7 emergency vehicle repair services</p>
                        <p>Name: Quick Auto Fix</p>
                        <p>Tel: +855 010 222 333</p>
                        <p>Address: #5, Street 9, Phnom Penh</p>
                    </div>
                </div>

                <div className="phnom-penh-card-row2">
                    <div className="phnom-penh-card">
                        <img src="https://fastly.picsum.photos/id/885/360/240.jpg?hmac=dFqE8fyyysWhos_BNVDr8j4it3WVmRbV24SL4ODZPJ4" alt="img-pp4"/>
                        <p>High-quality parts and equipment used</p>
                        <p>Name: Auto Repair Pro</p>
                        <p>Tel: +855 023 111 333</p>
                        <p>Address: #12, Street 31, Phnom Penh</p>
                    </div>
                    <div className="phnom-penh-card">
                        <img src="https://fastly.picsum.photos/id/1065/360/240.jpg?hmac=2o9lbxy7wSlB5sPwUNFL0xD_zcj9IoYGpBLoLrU8cow" alt="img-pp5" />
                        <p>Comprehensive vehicle diagnostic services</p>
                        <p>Name: Auto Check Center</p>
                        <p>Tel: +855 011 444 555</p>
                        <p>Address: #18, Street 25, Phnom Penh</p>
                    </div>
                    <div className="phnom-penh-card">
                        <img src="https://fastly.picsum.photos/id/619/360/240.jpg?hmac=ZH_ciWLDkdjICG2cv5RYa40jlc_w2sWAcJcEHNUIjFk" alt="img-pp6" />
                        <p>Trusted by local car owners for years</p>
                        <p>Name: Car Trust</p>
                        <p>Tel: +855 016 555 666</p>
                        <p>Address: #33, Street 79, Phnom Penh</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardSlider;