import Education from '../layouts/Education';
import Experience from '../layouts/Experience';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import MainHero from '../layouts/MainHero';

const App: React.FC = () => {
    return (
        <div className="h-auto">
            <Header />
            <MainHero />
            <Education />
            <Experience />
            <Footer />
        </div>
    );
};

export default App;
