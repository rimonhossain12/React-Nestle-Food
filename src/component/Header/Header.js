import React from 'react';
import logo from '../../images/food2.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/brands">Brands</a><a href="/health">Healthy Cooking</a><a href="/careers">Careers</a>
            </nav>
        </div>
    );
};

export default Header;