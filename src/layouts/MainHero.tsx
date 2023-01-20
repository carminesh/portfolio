import React, { useCallback } from 'react';
import ActionButton from '../components/ActionButton';
import mailIcon from '../assets/mailIcon.svg';
import downloadIcon from '../assets/downloadIcon.svg';
import computerIcon from '../assets/computerIcon.svg';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/animation.css';
import useInfo from '../hooks/useInfo';
import { motion } from 'framer-motion';

const MainHero: React.FC = () => {
    const contactAction = useCallback(() => {
        console.log('CONTACT');
    }, []);

    const { sendEmail } = useInfo('fabbricarmine@gmail.com');

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 },
            }}
            className="bg-slate-50 w-auto h-auto flex-row items-center pl-6 pr-10 pt-12 md:flex md:pb-40  dark:bg-theme-dark-bg bg"
        >
            <section className="flex-1 h-auto flex-col ">
                <h2 className="text-4xl sm:text-5xl font-normal text-black mb-2 dark:text-theme-font-secondary">Hi There,</h2>
                <h1 className="text-5xl sm:text-7xl font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-gradient-1 to-purple-gradient-2">I'm Carmine</h1>
                <p className="text-l sm:text-xl font-normal text-light-gray phone:text-base dark:text-theme-font-secondary">
                    A computer science graduate based in Italy passionate about software development and highly enthusiastic about it. <br></br>I am always willing to learn new things.
                </p>

                <div className="mt-5 flex flex-row justify-between w-[328px]">
                    <ActionButton
                        icon={mailIcon}
                        text={'Contact Me'}
                        buttonStyle={{ background: 'linear-gradient(to right, var(--gradient-start, #B38EFF), var(--gradient-end, #858CFF))' }}
                        textColor={'white'}
                        onClick={() => sendEmail()}
                    />
                    <ActionButton icon={downloadIcon} text={'Resume'} buttonStyle={{ backgroundColor: '#DDDDDD' }} textColor={'#1B1B1B'} onClick={() => contactAction} />
                </div>

                <div className="flex flex-rowitems-center mt-5">
                    <a href="https://www.linkedin.com/in/carmine-fabbri-0a1b24181/">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" className="text-black dark:text-theme-font-secondary dark:hover:text-purple-gradient-1 hover:text-purple-gradient-1" />
                    </a>
                    <a href="https://github.com/carminesh">
                        <FontAwesomeIcon
                            icon={faSquareGithub}
                            size="3x"
                            style={{ marginLeft: 10 }}
                            className="text-black dark:text-theme-font-secondary dark:hover:text-purple-gradient-1 hover:text-purple-gradient-1"
                        />
                    </a>
                </div>
            </section>

            <img className="computerIcon" src={require('../assets/computerIconImg.png')} alt="computer icon" />
        </motion.div>
    );
};

export default MainHero;
