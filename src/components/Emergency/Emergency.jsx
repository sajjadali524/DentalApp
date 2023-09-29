import React from 'react';
import Photo from '../../assets/emergency.png';
import './Emergency.css';
import Appointmentbtn from '../Appointmentbtn';

const Emergency = () => {
    return (
        <>
        <div className="emergency">
                <span><img src={Photo} alt="emergency" /></span>

            <div className="emerg-details">
                <h1 className="heading">Dental 24H Emergency</h1>
                <h1 className="heading2">Gentle, friendly treatment from our locally practice.</h1>
                <p className="parag">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <Appointmentbtn className="button" />
            </div>
        </div>
        </>
    )
}

export default Emergency;
