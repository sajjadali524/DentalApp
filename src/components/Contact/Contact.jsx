import React from 'react';
import './Contact.css';
import mapimg from '../../assets/map.png';
import location from '../../assets/Location.png';
import home from '../../assets/Home.png';
import Form from './Form/Form';

const Contact = () => {
    return (
        <>
            <div className="contacts">
                <div className="contact">

                    {/* left section star */}
                    <div className="left-section">
                        <img src={mapimg} alt="mapimg" className="map" />
                        <img src={location} alt="locationimg" />

                        <div className="small">
                            <span><div><img src={home} alt="homeimg" /></div></span>
                            <h4>35 West Dental Street California 1004</h4>
                        </div>

                    </div>

                    {/* right section startt */}
                    <div className="right-section">
                        <h1 className="form-heading">BOOK APPOINTMENT</h1>
                        <h1 className="f-title">Care at Dentalist is pleasure</h1>
                        <p className="form-desc">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual</p>
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
