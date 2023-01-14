import React, { useCallback } from 'react';
import ActionButton from '../components/ActionButton';
import mailIcon from '../assets/mailIcon.svg';
import downloadIcon from '../assets/downloadIcon.svg';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainHero() {
    const contactAction = useCallback(() => {
        console.log('CONTACT');
    }, []);

    return (
        <div className="w-screen h-screen bg-slate-50 pt-6">
            <section className="w-5/6 h-auto px-10 py-10 flex-col phone:px-4">
                <h2 className="text-5xl font-normal text-black mb-2">Hi There,</h2>
                <h1 className="text-7xl font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-gradient-1 to-purple-gradient-2 phone:text-6xl">I'm Carmine</h1>
                <p className="text-xl font-normal text-light-gray phone:text-base">
                    A computer science graduate. <br></br>Skilled in both individual and team environments and constantly seeking out new opportunities to learn and grow. <br></br>Committed to
                    delivering results and making a positive impact.
                </p>

                <div className="mt-5 flex flex-row justify-between w-80">
                    <ActionButton
                        icon={mailIcon}
                        text={'Contact Me'}
                        buttonStyle={{ background: 'linear-gradient(to right, var(--gradient-start, #B38EFF), var(--gradient-end, #858CFF))' }}
                        textColor={'white'}
                        onClick={() => contactAction}
                    />
                    <ActionButton icon={downloadIcon} text={'Resume'} buttonStyle={{ backgroundColor: '#DDDDDD' }} textColor={'#1B1B1B'} onClick={() => contactAction} />
                </div>

                <div className="flex flex-rowitems-center mt-5">
                    <a href="https://www.linkedin.com/in/carmine-fabbri-0a1b24181/">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" className="text-black hover:text-purple-gradient-1" />
                    </a>
                    <a href="https://github.com/carminesh">
                        <FontAwesomeIcon icon={faSquareGithub} size="3x" style={{ marginLeft: 10 }} className="text-black hover:text-purple-gradient-1" />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default MainHero;
