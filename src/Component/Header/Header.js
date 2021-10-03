import React from 'react';
import logo from './logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="main-menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Cantact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;