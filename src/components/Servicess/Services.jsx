import React from 'react';
import './Services.css';
import Cards from './Cards/Cards';
import cardData from './Cards/CardData';
import Btnicon from '../../assets/btnicon.png';

const Services = () => {
    return (
        <>
            <div className="services">
                <h1>SERVICES</h1>
                <div className="text-part">
                    <h1>Feel amazing about your oral health</h1>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>


                {/* using map function through each Service Card */}
                <div className="cards">
                {cardData.map((val) => {
                    return (
                        <Cards 
                        color={val.colors}
                        image={val.images} 
                        title={val.title} 
                        desc={val.description} 
                        />
                    )
                })
                }

                </div>

                {/* service btn */}
                <div className="service-btn">
                <button>View All service list<img src={Btnicon} alt="icon" /></button>
                </div>
            </div>
        </>
    )
}

export default Services;
