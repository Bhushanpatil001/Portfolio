import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';


import Contact from './components/contact/Contact';
import useLocalStorage from 'use-local-storage';


function App() {
    // Set dark mode as default instead of using system preference
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <About />
                <Services />
                <Skills />
                <Resume />
                <Portfolio />
                <Contact theme={theme} />
            </main>
        </div>
    );
}

export default App;
