import React, { FC } from 'react';
import logo from '../assets/logo.svg';
import darkThemeIcon from '../assets/darkThemeIcon.svg';
import '../styles/Header.css';

const Header: FC = () => {
    return (
        <div className="Header-container">
            <img className="Personal-logo" src={logo} alt="personal logo" />
            <img className="Dark-theme-icon" src={darkThemeIcon} alt="dark theme icon" />
        </div>
    );
};

export default Header;
