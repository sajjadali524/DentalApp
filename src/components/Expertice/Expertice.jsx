import React from 'react';
import './Expertice.css';
import Doctor from '../../assets/doctor.png';
import True from '../../assets/Time Circle.png';

const Expertice = () => {
    return (
        <>
            <div className="expert">

                <div className="expert-details">
                    <h1 className="heading">EXPERTS IN DENTAL</h1>
                    <h1 className="heading2">Top-notch dentistry, from Seattle's top dentists.</h1>
                    <p className="parag">Lorem ipsum is placeholder text commonly used in the <br></br> graphic, print, and publishing industries for previewing layouts</p>
                    <h3><img src={True} alt="pictur" />Top quality dental team</h3>
                    <h3><img src={True} alt="pictur" />State of the art dental services</h3>
                    <h3><img src={True} alt="pictur" />Discount on all dental treatment</h3>
                </div>
                
                <span><img src={Doctor} alt="Doctor" /></span>
            </div>
        </>
    )
}

export default Expertice;
