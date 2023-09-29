import React from 'react';
import './Feature.css';
import fcardData from './Fcard/FcardData';
import Fcard from './Fcard/Fcard';

const Feature = () => {
    return (
        <>
            <div className="features">

                <div className="feature">

                    <h1 className="f-heading">FEATURES</h1>
                    <h1 className="f-heading-2">Specialized care through experience</h1>
                    <p className="f-paragraph">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                    {/* loop through feature card data */}
                    <div className="f-cards">
                        {
                            fcardData.map((val) => {
                                return (
                                    <Fcard
                                        img={val.img}
                                        title={val.title}
                                        desc={val.descr}
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

export default Feature;
