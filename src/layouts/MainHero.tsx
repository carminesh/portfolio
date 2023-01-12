import React, { useCallback } from 'react';
import '../styles/MainHero.css';
import computerIcon from '../assets/computerIcon.svg';
import ActionButton from '../components/ActionButton';
import mailIcon from '../assets/mailIcon.svg';

const MainHero: React.FC = () => {
    const contactMeMethod = useCallback(() => {
        console.log('PROVA');
    }, []);

    return (
        <div className="Main-container">
            <div className="Sub-container">
                <div className="Presentation-container">
                    <h2 id="Presentation-label">Hi There,</h2>
                    <h1 id="Name-label">I'm Carmine</h1>
                    <p id="Personal-description">
                        A computer science graduate. <br></br>
                        Skilled in both individual and team environments and <br></br>
                        constantly seeking out new opportunities to learn and grow. <br></br>
                        Committed to delivering results and making a positive impact.
                    </p>
                    <div id="Button-section">
                        <ActionButton text={'Contact Me'} logo={mailIcon} backgroundColor={'#B48FFF'} color={'#EEEEEE'} onClick={contactMeMethod} />
                        <ActionButton text={'Download Resume'} logo={mailIcon} backgroundColor={'#EEEEEE'} color={'#EEEEEE'} onClick={contactMeMethod} />
                    </div>
                </div>

                <img className="Computer-icon" src={computerIcon} alt="computer icon" />
            </div>
        </div>
    );
};

export default MainHero;
