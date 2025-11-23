
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light = false }) => (
  <div className="mb-12 md:mb-20 max-w-3xl">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`w-12 h-1 ${light ? 'bg-azbur-red' : 'bg-azbur-red'} mb-6`}
    />
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl font-display font-bold uppercase tracking-wide ${light ? 'text-white' : 'text-azbur-black'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`mt-4 text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
