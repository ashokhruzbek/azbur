
import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Truck, Hammer, MessageSquareText, FileCheck } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Translations } from '../types';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  index: number;
}

const ServiceItem = ({ icon, title, desc, index }: ServiceItemProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group flex flex-col items-start p-8 md:p-10 border border-gray-100 hover:border-azbur-red/30 hover:bg-white bg-gray-50/50 transition-all duration-500 rounded-sm"
  >
    <div className="mb-6 text-azbur-black group-hover:text-azbur-red transition-colors duration-500">
       {/* Explicitly typing cloneElement to handle Lucide props */}
       {React.cloneElement(icon as React.ReactElement<any>, { strokeWidth: 1.25, size: 40 })}
    </div>
    
    <h4 className="text-xl md:text-2xl font-display font-bold text-azbur-black mb-4 uppercase tracking-wide group-hover:translate-x-1 transition-transform duration-300">
        {title}
    </h4>
    
    <p className="text-gray-500 text-sm leading-relaxed font-sans group-hover:text-gray-700 transition-colors">
        {desc}
    </p>

    {/* Subtle indicator line */}
    <div className="w-8 h-[1px] bg-gray-300 mt-6 group-hover:w-full group-hover:bg-azbur-red transition-all duration-500 ease-out" />
  </motion.div>
);

interface ServicesProps {
  t: Translations;
}

export const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section id="services" className="py-28 bg-white text-azbur-black relative">
      <div className="container mx-auto px-6 md:px-12">
         {/* Minimalist Header */}
         <div className="mb-16">
            <SectionHeading title={t.services.title} />
         </div>
         
         {/* Clean Grid Layout */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Service 1: Measurement */}
           <ServiceItem 
             icon={<Ruler />}
             title={t.services.measure_title}
             desc={t.services.measure_desc}
             index={0}
           />
           
           {/* Service 2: Delivery */}
           <ServiceItem 
             icon={<Truck />}
             title={t.services.delivery_title}
             desc={t.services.delivery_desc}
             index={1}
           />
           
           {/* Service 3: Installation */}
           <ServiceItem 
             icon={<Hammer />}
             title={t.services.install_title}
             desc={t.services.install_desc}
             index={2}
           />
           
           {/* Service 4: Consultation */}
           <ServiceItem 
             icon={<MessageSquareText />}
             title={t.services.consult_title}
             desc={t.services.consult_desc}
             index={3}
           />

            {/* Service 5: Info */}
           <ServiceItem 
             icon={<FileCheck />}
             title={t.services.info_title}
             desc={t.services.info_desc}
             index={4}
           />

           {/* Call to Action Box - Fits nicely in the grid */}
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="flex flex-col items-center justify-center p-8 bg-azbur-red text-white text-center rounded-sm"
           >
              <h4 className="text-2xl font-display font-bold uppercase mb-2">{t.services.cta_title}</h4>
              <p className="text-white/80 text-sm mb-6">{t.services.cta_desc}</p>
              <a href="#contact" className="px-6 py-3 bg-white text-azbur-red font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
                {t.services.cta_button}
              </a>
           </motion.div>
         </div>
      </div>
    </section>
  );
};