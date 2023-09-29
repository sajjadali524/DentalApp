import React from 'react';
import './Fcard.css';

const Fcard = ({ img, desc, title }) => {
    return (
        <>
            <div className="feature-section">
                <div className="f-section">
                    <span><div><img src={img} alt="photos" /></div></span>
                    <div className="f-section-text">
                        <h1 className="s-heading">{title}</h1>
                        <h4 className="s-parag">{desc}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fcard;
