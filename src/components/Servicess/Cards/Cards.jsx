import React from 'react';
import './Cards.css';

const Cards = ({ image, title, desc, color }) => {
    return (
        <>
            <div className="card">
                <div className="card-image" style={{background:color}}>
                    <span><div><img src={image} alt="images" /></div></span>

                </div>

                <div className="cards-text">
                    <h1>{title}</h1>
                    <p className="card-para">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default Cards;
