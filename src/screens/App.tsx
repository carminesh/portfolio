import { useSelector } from 'react-redux';
import Education from '../layouts/Education';
import Experience from '../layouts/Experience';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import MainHero from '../layouts/MainHero';
import { getSelectedTheme } from '../store/slices/ThemeSlice';
import EducationCard from '../layouts/Education';

const App: React.FC = () => {
    const darkModeSelected: boolean = useSelector(getSelectedTheme);

    return (
        <div className={darkModeSelected ? 'dark' : ''}>
            <Header />
            <div className="2xl:px-72 lg:px-44  md:px-8 bg-slate-50 dark:bg-theme-dark-bg">
                <MainHero />
                <Education />
                <Experience />
                <Footer />
            </div>
        </div>
    );
};

export default App;
