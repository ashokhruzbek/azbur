
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { IMG_PVC, IMG_ALUM, IMG_IMP, IMG_DOORS } from '../constants';
import { Translations } from '../types';

const ProductCard = ({ title, desc, img, delay }: { title: string, desc: string, img: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="group relative h-[450px] overflow-hidden cursor-pointer bg-azbur-dark"
  >
     <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
     
     <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">{title}</h3>
        <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
           {desc}
        </p>
        <span className="inline-flex items-center text-azbur-red text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-azbur-red pb-1">
           Explore <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
        </span>
     </div>
     
     {/* Top accent line */}
     <div className="absolute top-0 left-0 w-full h-1 bg-azbur-red transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
  </motion.div>
);

interface ProductsProps {
  t: Translations;
}

export const Products: React.FC<ProductsProps> = ({ t }) => {
  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title={t.products.title} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
           <ProductCard 
              title={t.products.pvc_title}
              desc={t.products.pvc_desc}
              img={IMG_PVC}
              delay={0}
           />
           <ProductCard 
              title={t.products.alum_title}
              desc={t.products.alum_desc}
              img={IMG_ALUM}
              delay={0.1}
           />
           <ProductCard 
              title={t.products.doors_title}
              desc={t.products.doors_desc}
              img={IMG_DOORS}
              delay={0.2}
           />
           <ProductCard 
              title={t.products.imported_title}
              desc={t.products.imported_desc}
              img={IMG_IMP}
              delay={0.3}
           />
        </div>
      </div>
    </section>
  );
};