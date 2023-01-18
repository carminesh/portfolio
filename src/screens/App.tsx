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
            <div className="lg:px-40 md:px-8 bg-slate-50 dark:bg-theme-dark-bg">
                <MainHero />
                <Education />
                <Experience />
                <Footer />
            </div>
        </div>
    );
};

export default App;
