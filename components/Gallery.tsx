
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { GalleryImages } from '../constants';
import { Translations } from '../types';

interface GalleryProps {
  t: Translations;
}

export const Gallery: React.FC<GalleryProps> = ({ t }) => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title={t.nav.gallery} subtitle={t.gallery.subtitle} />
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GalleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="break-inside-avoid relative group overflow-hidden cursor-zoom-in"
            >
              <img src={src} alt={`Gallery ${idx}`} className="w-full rounded-sm" />
              <div className="absolute inset-0 bg-azbur-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-azbur-red text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                  <Check size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};