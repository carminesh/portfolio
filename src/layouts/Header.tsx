import React from 'react';
import logo from '../assets/logo.svg';
import themeIcon from '../assets/themeIcon.svg';

const Header: React.FC = () => {
    return (
        <nav className="flex flex-row justify-between bg-slate-50 h-28 w-screen px-12 py-10">
            <img src={logo} alt={'button icon'} className="icon" />
            <img src={themeIcon} alt={'button icon'} className="icon" />
        </nav>
    );
};

export default Header;
