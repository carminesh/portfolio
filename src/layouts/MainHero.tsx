import React, { FC } from 'react';
import '../styles/MainHero.css';
import computerIcon from '../assets/computerIcon.svg';

const MainHero: FC = () => {
    return (
        <div className="Main-container">
            <div className="Sub-container">
                <div className="Presentation-container">
                    <h2>Hi There,</h2>
                    <h1>I'm Carmine</h1>
                    <p>
                        A computer science graduate. skilled in both individual and team environments and constantly seeking out new opportunities to learn and grow. Committed to delivering results
                        and making a positive impact.
                    </p>
                </div>

                <img className="Computer-icon" src={computerIcon} alt="computer icon" />
            </div>
        </div>
    );
};

export default MainHero;
