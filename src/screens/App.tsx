import { useSelector } from 'react-redux';
import Education from '../layouts/Education';
import Experience from '../layouts/Experience';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import MainHero from '../layouts/MainHero';
import { getSelectedTheme } from '../store/slices/ThemeSlice';
import { useEffect } from 'react';

const App: React.FC = () => {
    const darkModeSelected: boolean = useSelector(getSelectedTheme);

    return (
        <div className={darkModeSelected ? 'dark' : ''}>
            <Header />
            <MainHero />
            <Education />
            <Experience />
            <Footer />
        </div>
    );
};

export default App;
