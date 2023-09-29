import React from 'react';
import './Card.css';

const Card = ({img, heading, title, desc}) => {
    return (
        <>
        <div className="blog-card">
            <div className="img-section">
                <span><h4>23</h4><h6>Jan</h6></span>
                <img src={img} alt="blog" />
            </div>

            <div className="b-text-section">
                <h1 className="b-main-heading">{heading}</h1>
                <h1 className="b-heading">{title}</h1>
                <p className="b-parag">{desc}</p>
            </div>
        </div>
        </>
    )
}

export default Card;
