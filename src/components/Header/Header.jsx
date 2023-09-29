import React from 'react';
import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import './Header.css';
import '../../App.css';
import menu from '../../assets/menu.png';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`Header ${isOpen && "open"}`}>

            <div className="logo">
                <img src={Logo} alt="logo" />
                <h2>Dentalist.</h2>
            </div>

            <div className="navbar">
                <ul className={`ul ${isOpen && "open"}`}>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">New Patient</a></li>
                    <li><a href="/">Our Services</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </div>

            <div className="button">
                <button>Book appointment</button>
            </div>
            
            <img src={menu} alt="menuImg" className="menu" onClick={() => setIsOpen(!isOpen)} />
        </div>
    )
}

export default Header;
