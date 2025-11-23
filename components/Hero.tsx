
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { IMG_HERO } from '../constants';
import { Translations } from '../types';

interface HeroProps {
  t: Translations;
  scrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ t, scrollToSection }) => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-azbur-black text-white">
      {/* Background Parallax */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 w-full h-[120%] z-0"
      >
         <div className="absolute inset-0 bg-black/60 z-10" />
         <div className="absolute inset-0 bg-gradient-to-t from-azbur-black via-transparent to-transparent z-10 opacity-90" />
         <img 
           src={IMG_HERO} 
           className="w-full h-full object-cover animate-slow-pan" 
           alt="Hero Background"
         />
      </motion.div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
           {/* Decorative Brand Element */}
           <div className="flex items-center gap-4 mb-6 opacity-80">
              <div className="w-12 h-[2px] bg-azbur-red"></div>
              <span className="text-sm uppercase tracking-[0.3em] font-medium">SINCE. 2012</span>
           </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-tight mb-8">
            {t.hero.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? 'text-azbur-red' : ''}>{word} </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-10 border-l-2 border-white/20 pl-6">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button onClick={() => scrollToSection('products')}>
              {t.hero.cta_primary} <ChevronRight size={18} />
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')}>
              {t.hero.cta_secondary}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Animated Arrow */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/80 cursor-pointer hover:text-white transition-colors flex flex-col items-center gap-2"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown size={48} strokeWidth={1} />
      </motion.div>
    </section>
  );
};
