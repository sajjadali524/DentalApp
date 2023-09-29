import React from 'react';
import './Review.css';

const ReviewData = (props) => {
    return (
        <>
            <div className="reviews">
                <div className="review">
                    <img src={props.img} alt="photos" className="image" />
                    <h1 className="r-heading">{props.title}</h1>
                    <h5 className="r-parag">{props.desc}</h5>
                    <img src={props.rating} alt="img" />
                </div>
            </div>
        </>
    )
}

export default ReviewData;