import React from 'react';
import './Testimonial.css';
import Review from './Revieww/Review';
import reviewData from './Revieww/ReviewData';

const Testimonial = () => {
    return (
        <>
            <div className="testimonials">

                <div className="testimonial">
                    <div className="text-box">
                        <h1 className="main-heading">TESTIMONIAL</h1>
                        <div className="text-section">
                            <h1 className="section-heading">What people have said about us</h1>
                            <h5>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts</h5>
                        </div>
                    </div>

                    {/* loop through multiple cards */}

                    <div className="review-data">
                        {
                            reviewData.map((val) => {
                                return (
                                    <Review
                                        img={val.img}
                                        title={val.title}
                                        desc={val.desc}
                                        rating={val.rating}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;
