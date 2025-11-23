
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Globe } from 'lucide-react';
import { Language, Translations } from '../types';
import { Logo } from './ui/Logo';

interface NavbarProps {
  lang: Language;
  setLanguage: (lang: Language) => void;
  isScrolled: boolean;
  t: Translations;
  scrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLanguage, isScrolled, t, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: "O'zbek" },
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' }
  ];

  const handleLanguageSelect = (code: Language) => {
    setLanguage(code);
    setLangMenuOpen(false);
    setMobileMenuOpen(false);
  };

  // Animation variants for the drawer and its children
  const sidebarVariants: Variants = {
    closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    open: { 
      x: 0, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const menuItems = ['home', 'about', 'products', 'services', 'gallery', 'contact'];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo Section */}
          <div 
             className="cursor-pointer flex items-center gap-3 group relative z-50" 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
          >
             <div className="h-14 md:h-16 transition-all duration-500 flex items-center">
                <Logo 
                  className="h-full w-auto" 
                  variant={isScrolled ? 'default' : 'white'}
                />
             </div>
          </div>

          {/* Desktop Navigation - Larger, Roboto-like (Manrope), Beautiful spacing */}
          <nav className={`hidden lg:flex items-center gap-10 text-[15px] font-sans font-bold tracking-wide uppercase ${isScrolled ? 'text-azbur-black' : 'text-white'}`}>
            {['about', 'products', 'services', 'gallery', 'contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavClick(item)}
                className="hover:text-azbur-red transition-colors relative group py-2"
              >
                {t.nav[item as keyof typeof t.nav]}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-azbur-red transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Actions: Language & Phone */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Language Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)} 
                className={`flex items-center gap-2 font-bold uppercase text-xs transition-colors outline-none border-none py-2 px-3 rounded-full
                  ${isScrolled ? 'bg-gray-100 text-azbur-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                <Globe size={16} />
                <span className="mt-0.5">{lang.toUpperCase()}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-36 bg-white rounded-lg shadow-xl py-2 overflow-hidden border border-gray-100 ring-1 ring-black/5"
                    onMouseLeave={() => setLangMenuOpen(false)}
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => handleLanguageSelect(l.code)}
                        className={`w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between group
                          ${lang === l.code ? 'text-azbur-red bg-red-50' : 'text-azbur-black hover:bg-gray-50'}`}
                      >
                        {l.label}
                        {lang === l.code && <div className="w-1.5 h-1.5 rounded-full bg-azbur-red" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Vertical Separator */}
            <div className={`h-8 w-px ${isScrolled ? 'bg-gray-200' : 'bg-white/20'}`} />

            {/* Phone Number Display - Clean: Icon + Number only */}
            <a href="tel:+998942340234" className="group flex items-center gap-3">
              <div className={`p-2.5 rounded-full transition-all duration-300 shadow-sm relative overflow-hidden
                ${isScrolled 
                  ? 'bg-azbur-red text-white group-hover:bg-azbur-black' 
                  : 'bg-white text-azbur-red group-hover:bg-azbur-red group-hover:text-white'}`}
              >
                <Phone size={20} className="relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-display font-bold tracking-wider leading-none transition-colors ${isScrolled ? 'text-azbur-black group-hover:text-azbur-red' : 'text-white group-hover:text-gray-200'}`}>
                  +998 94 234 0 234
                </span>
              </div>
            </a>

          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-azbur-black hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* --- Mobile Drawer with Backdrop --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-azbur-black/80 backdrop-blur-sm"
            />

            {/* Side Drawer */}
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-[70] shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <div className="h-8">
                  <Logo className="h-full w-auto" />
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="p-2 -mr-2 text-gray-400 hover:text-azbur-red transition-colors bg-gray-50 rounded-full group hover:rotate-90 duration-300"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex flex-col px-6 py-8 gap-6 overflow-y-auto h-full">
                
                {/* Mobile Menu Items - Reduced Size */}
                <div className="space-y-4">
                    {menuItems.map((item, index) => (
                    <motion.button 
                        key={item} 
                        variants={itemVariants}
                        onClick={() => handleNavClick(item === 'home' ? 'root' : item)}
                        className="group flex items-center w-full text-left relative py-2"
                    >
                        <span className="text-xs font-sans font-bold text-azbur-red/40 mr-4 w-6">
                            0{index + 1}
                        </span>
                        {/* Smaller, cleaner font for mobile menu */}
                        <span className="text-2xl font-display font-bold uppercase tracking-wide text-azbur-black group-hover:text-azbur-red transition-colors duration-300">
                           {t.nav[item as keyof typeof t.nav]}
                        </span>
                        {/* Hover line */}
                        <span className="absolute bottom-1 left-10 w-0 h-[2px] bg-azbur-red transition-all duration-500 group-hover:w-12" />
                    </motion.button>
                    ))}
                </div>
                
                <motion.div variants={itemVariants} className="h-px bg-gray-100 my-2" />
                
                {/* Mobile Language Selector */}
                <motion.div variants={itemVariants} className="flex flex-col gap-3">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                    <Globe size={14} /> Select Language
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                     {languages.map((l) => (
                       <button
                         key={l.code}
                         onClick={() => handleLanguageSelect(l.code)}
                         className={`px-2 py-2.5 text-sm rounded-md border transition-all font-bold uppercase flex flex-col items-center justify-center gap-1
                           ${lang === l.code 
                             ? 'border-azbur-red bg-azbur-red text-white shadow-md' 
                             : 'border-gray-200 text-gray-500 hover:border-azbur-red/50 hover:text-azbur-black bg-gray-50'}`}
                       >
                         {l.code}
                       </button>
                     ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-auto pt-4">
                  <a href="tel:+998942340234" className="bg-azbur-black text-white p-5 rounded-xl flex items-center gap-4 shadow-xl hover:bg-azbur-red transition-colors group relative overflow-hidden">
                     <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform relative z-10">
                        <Phone size={20} />
                     </div>
                     <div className="relative z-10">
                        <p className="text-[10px] text-white/60 uppercase tracking-widest mb-0.5">Call Us</p>
                        <p className="text-xl font-display font-bold">+998 94 234 0 234</p>
                     </div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
