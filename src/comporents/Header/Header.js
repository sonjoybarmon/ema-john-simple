import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className = 'header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop"> Shop </a>
                <a href="/reviwe"> Reviwe </a>
                <a href="/manage"> manage inventory </a>
            </nav>
        </div>
    );
};

export default Header;