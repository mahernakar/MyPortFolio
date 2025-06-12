import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.pageYOffset < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isTop={isTop} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <BackToTop isTop={isTop} />
    </div>
    </ThemeContext.Provider>
  );
}