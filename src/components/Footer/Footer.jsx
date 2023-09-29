import React from 'react';
import './Footer.css';
import logo from '../../assets/Logo.png';
import social from '../../assets/social.png';
import Calling from '../../assets/Calling.png';
import Clock from '../../assets/Time Circle.png';
import location from '../../assets/Location.png';

const Footer = () => {
    return (
        <>
            <div className="Footer">

                {/* left side start */}
                <div className="footer-left-side">
                    <div className="brand">
                        <img src={logo} alt="logo" />
                        <h1>Dentalist.</h1>
                    </div>
                    <p>Dental Care Seattle is a top-rated local practice for cosmetic, preventative, and restorative dentistry on First Hill</p>

                    <h2 className="social-text">FOLLOW US NOW</h2>
                    <img src={social} alt="img" className="social-img" />

                    <h6>©Dentalist. All Right Reserved</h6>
                </div>

                {/* right side start */}
                <div className="footer-right-side">
                    <div className="right-left-side">
                        <ul>
                            <h1>QUICK LINKS</h1>
                            <li>About Us</li>
                            <li>Dental Services</li>
                            <li>Dentist</li>
                            <li>Blog</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div className="right-right-side">
                        <h1>CONTACT & INFORMATION</h1>

                        <div className="footer-details">
                            <span><div><img src={Calling} alt="calling" /></div></span>

                            <div className="footer-info">
                                <h3>Phone Number</h3>
                                <h2>+088 123 654 987</h2>
                            </div>
                        </div>

                        <div className="footer-details">
                            <span><div><img src={Clock} alt="calling" /></div></span>

                            <div className="footer-info">
                                <h3>Open Hour</h3>
                                <h2>09:00:AM-18:00PM</h2>
                            </div>
                        </div>

                        <div className="footer-details">
                            <span><div><img src={location} alt="calling" /></div></span>

                            <div className="footer-info">
                                <h3>Clinic Address</h3>
                                <h2>35 West Dental Street California 1004</h2>
                            </div>
                        </div>

                        <div className="copyright">
                            <a href="/" >Terms of Use</a>
                            <a href="/" >Privacy Policy</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
