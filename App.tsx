
import React, { useState, useEffect } from 'react';
import { dictionary } from './translations';
import { Language } from './types';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('uz');
  const [isScrolled, setIsScrolled] = useState(false);
  const t = dictionary[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setLanguage = (selectedLang: Language) => {
    setLang(selectedLang);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-white">
      <Navbar 
        lang={lang} 
        setLanguage={setLanguage} 
        isScrolled={isScrolled} 
        t={t} 
        scrollToSection={scrollToSection} 
      />
      <Hero t={t} scrollToSection={scrollToSection} />
      <About t={t} />
      <Products t={t} />
      <Services t={t} />
      <Gallery t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
};

export default App;
