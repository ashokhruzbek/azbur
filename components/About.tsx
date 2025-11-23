
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Translations } from '../types';
import { ShieldCheck, Trophy, Users, Building2, ArrowUpRight } from 'lucide-react';

interface AboutProps {
  t: Translations;
}

// Minimalist Grid Stat Item
const StatItem = ({ 
  value, 
  label, 
  icon, 
  index 
}: { 
  value: string, 
  label: string, 
  icon: React.ReactNode, 
  index: number 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 md:p-8 group border-b border-gray-100 md:border-b-0 md:odd:border-r hover:bg-gray-50/50 transition-colors duration-500"
    >
      <div className="flex justify-between items-start mb-4">
         {/* Icon - Slightly smaller for compact look */}
         <div className="text-gray-300 group-hover:text-azbur-red transition-colors duration-500">
           {React.cloneElement(icon as React.ReactElement<any>, { strokeWidth: 1.5, size: 24 })}
         </div>
         {/* Decorative Arrow */}
         <ArrowUpRight className="text-gray-200 group-hover:text-azbur-black opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0" size={18} />
      </div>

      <div className="relative overflow-hidden">
        {/* Number - Scaled down from 6xl to 4xl/5xl for balance */}
        <h3 className="text-4xl md:text-5xl font-display font-bold text-azbur-black leading-none mb-2">
          {value}
        </h3>
      </div>
      
      {/* Label - Scaled UP from xs to sm/base and made bolder */}
      <p className="text-sm md:text-base font-bold uppercase tracking-wide text-gray-500 group-hover:text-azbur-black transition-colors duration-300">
        {label}
      </p>

      {/* Grid Lines for Desktop (simulated with borders on container, but precise lines here for visual flair) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100 md:hidden" />
    </motion.div>
  );
};

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
         <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content - Typography & Data Grid */}
            <div className="lg:col-span-7 flex flex-col justify-center">
               <SectionHeading title={t.about.title} />
               
               {/* Description with left border accent */}
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2 }}
                 className="pl-6 border-l-2 border-azbur-red/20 mb-12"
               >
                 <p className="text-lg md:text-xl text-azbur-black font-sans leading-relaxed opacity-80 mb-4 max-w-xl">
                   {t.about.description}
                 </p>
                 <div className="flex items-center gap-2">
                    <div className="h-[1px] w-12 bg-azbur-black"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-azbur-red">Azbur Management</span>
                 </div>
               </motion.div>

               {/* Blueprint Grid Layout for Stats - Compact Mode */}
               <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-100">
                  <StatItem 
                    value={t.about.stat2} 
                    label={t.about.stat2_label} 
                    icon={<Building2 />}
                    index={0}
                  />
                  <StatItem 
                    value={t.about.stat1} 
                    label={t.about.stat1_label} 
                    icon={<Trophy />}
                    index={1}
                  />
                  <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 border-t border-gray-100">
                     <StatItem 
                       value={t.about.stat3} 
                       label={t.about.stat3_label} 
                       icon={<Users />}
                       index={2}
                     />
                     <StatItem 
                       value={t.about.stat4} 
                       label={t.about.stat4_label} 
                       icon={<ShieldCheck />}
                       index={3}
                     />
                  </div>
               </div>
               {/* Closing borders for the grid */}
               <div className="w-full h-[1px] bg-gray-100" />
            </div>

            {/* Right Content - Clean Image Presentation */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
               <motion.div 
                 initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                 whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                 transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for smooth reveal
                 className="relative z-10"
               >
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop" 
                    className="w-full h-[550px] object-cover grayscale brightness-110 contrast-125 rounded-sm" 
                    alt="Industrial Architecture" 
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-azbur-black/80 via-transparent to-transparent opacity-60 rounded-sm" />

                  {/* Minimalist Floating Badge - User liked this */}
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                         <h4 className="text-3xl font-display font-bold uppercase mb-2">German Tech.</h4>
                         <p className="text-white/70 text-sm tracking-wide font-light">
                           Precision engineering meets local mastery.
                         </p>
                      </motion.div>
                  </div>
               </motion.div>

               {/* Background Decorative Element */}
               <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gray-100 -z-10 hidden lg:block rounded-sm" />
            </div>

         </div>
      </div>
    </section>
  );
};
