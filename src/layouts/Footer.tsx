import React from 'react';
import ActionButton from '../components/ActionButton';
import mailIcon from '../assets/mailIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PersonalLogo from '../assets/PersonalLogo';
import { useSelector } from 'react-redux';
import { getSelectedTheme } from '../store/slices/ThemeSlice';
import useInfo from '../hooks/useInfo';

const Footer: React.FC = () => {
    const isDarkModeEnabled: boolean = useSelector(getSelectedTheme);

    const { sendEmail } = useInfo('fabbricarmine@gmail.com');

    return (
        <footer className="flex flex-col items-center justify-between h-auto pt-10 w-auto bg-slate-50 dark:bg-theme-dark-bg">
            <div className="flex flex-col justify-between w-5/6 h-5/6 mb-20 rounded-md bg-gray-back py-6 px-10 lg:flex-row lg:items-center lg:h-56 dark:bg-theme-dark-bg-secondary">
                <span>
                    <h1 className="text-black font-medium text-3xl dark:text-theme-font-secondary">Are you keen to know more?</h1>
                    <h1 className="text-purple-gradient-1 font-medium text-3xl">Hit me up.</h1>
                </span>

                <div className="py-3 flex flex-col justify-between w-48 md:flex-row md:w-72 lg:h-20 lg:w-68 dark:bg-theme-dark-bg-secondary">
                    <ActionButton
                        icon={mailIcon}
                        text={'Contact Me'}
                        buttonStyle={{ marginRight: 10, background: 'linear-gradient(to right, var(--gradient-start, #B38EFF), var(--gradient-end, #858CFF))' }}
                        textColor={'white'}
                        onClick={() => sendEmail()}
                    />

                    <div className="flex flex-row items-center pt-4 md:pt-0">
                        <a href="https://www.linkedin.com/in/carmine-fabbri-0a1b24181/">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" className="text-black hover:text-purple-gradient-1 dark:text-theme-font-secondary dark:hover:text-purple-gradient-1" />
                        </a>
                        <a href="https://github.com/carminesh">
                            <FontAwesomeIcon
                                icon={faSquareGithub}
                                size="3x"
                                style={{ marginLeft: 10 }}
                                className="text-black hover:text-purple-gradient-1 dark:text-theme-font-secondary dark:hover:text-purple-gradient-1"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-row w-screen h-40 bottom-0 bg-slate-50 items-center justify-between px-8 md:px-20 dark:bg-theme-dark-bg">
                <PersonalLogo fill={isDarkModeEnabled ? '#f8fafc' : '#181818'} width={'50'} height={'35'} />

                <span className="flex flex-col items-start dark:text-theme-font-secondary">
                    <p className="font-light text-xs md:text-sm text-light-gray">@ Carmine Fabbri</p>
                    <p className="font-light text-xs md:text-sm text-light-gray">Developed with React and ❤️</p>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
