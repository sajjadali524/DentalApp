import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import Appointmentbtn from '../Appointmentbtn';
import Calling from '../../assets/Calling.png';
import Main from '../../assets/Main.png';
import Pattern from '../../assets/Pattern.png';

const Hero = () => {
    return (
        <>
            <Header />

            {/* Hero Section Start */}

            <div className="Hero-section">
                <div className="Hero">

                    <div className="left-section">
                        <h1>Entrust your smile to professional</h1>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        <div className="details">

                            {/* appointment button component */}
                            <Appointmentbtn />

                            <div className="contact-details">
                                <span><div><img src = { Calling } alt="calling" /></div></span>
                                    
                                <div className="contact-info">
                                    <h3>Dental 24H Emergency</h3>
                                    <h3>03 482 394 123</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-section">
                        <img src={ Pattern } className="pattern-img" alt="pattern" />
                        <img src={ Main } className="main-img" alt="main_photo" />
                    </div>

                </div>
            </div>

            {/* Hero Section End */}
        </>
    )
}

export default Hero;
