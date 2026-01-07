import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme, getSelectedTheme } from '../store/slices/ThemeSlice';
import PersonalLogo from '../assets/PersonalLogo';
import ThemeIcon from '../assets/ThemeIcon';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const isDarkModeEnabled: boolean = useSelector(getSelectedTheme);

    return (
        <nav className="flex flex-row justify-between items-center bg-slate-50 h-24 py-3 px-8 w-screen dark:bg-theme-dark-bg lg:px-20">
            <PersonalLogo fill={isDarkModeEnabled ? '#f8fafc' : '#181818'} width={'55'} height={'35'} />
            {/*   <button onClick={() => dispatch(switchTheme(!isDarkModeEnabled))}>
                <ThemeIcon fill={isDarkModeEnabled ? '#f8fafc' : '#181818'} width={'28'} height={'28'} />
            </button> */}
        </nav>
    );
};

export default Header;
