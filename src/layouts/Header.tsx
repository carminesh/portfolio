import React from 'react';
import logo from '../assets/logo.svg';
import themeIcon from '../assets/themeIcon.svg';

const Header: React.FC = () => {
    return (
        <nav className="flex flex-row justify-between items-center bg-slate-50 h-24 py-3 px-6 w-screen ">
            <img src={logo} alt={'button icon'} className="w-16 h-16 object-contain" />
            <img src={themeIcon} alt={'switch theme icon'} className="w-8 h-8 object-contain" />
        </nav>
    );
};

export default Header;
