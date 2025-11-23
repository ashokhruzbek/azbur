
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Translations } from '../types';
import { Logo } from './ui/Logo';

// Custom SVG Icons for official branding look
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="fill-current">
    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="fill-current">
     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface FooterProps {
  t: Translations;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <TelegramIcon />, href: "https://t.me/+998942340234", label: "Telegram" },
    { icon: <WhatsAppIcon />, href: "https://wa.me/998942340234", label: "WhatsApp" },
    { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram" },
  ];

  const links = ['home', 'about', 'products', 'services', 'gallery', 'contact'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 relative overflow-hidden">
       {/* Decorative top border */}
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-azbur-red to-transparent opacity-50" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          
          {/* Column 1: Brand Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-auto">
                 <Logo variant="white" className="h-full w-auto" />
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
               {t.hero.subtitle}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-azbur-red hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-lg uppercase tracking-wider mb-6 border-l-2 border-azbur-red pl-3">
              {t.footer.links_title}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link === 'home' ? 'home' : link}`} 
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm capitalize"
                  >
                    <ArrowRight size={12} className="text-azbur-red" />
                    {t.nav[link as keyof typeof t.nav]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-lg uppercase tracking-wider mb-6 border-l-2 border-azbur-red pl-3">
              {t.footer.contact_title}
            </h4>
            <div className="space-y-6">
               <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-white/5 rounded-lg text-azbur-red group-hover:bg-azbur-red group-hover:text-white transition-colors">
                     <Phone size={20} />
                  </div>
                  <div>
                     <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t.contact.phone_label}</p>
                     <a href="tel:+998942340234" className="text-white font-medium hover:text-azbur-red transition-colors block">
                        +998 94 234 0 234
                     </a>
                  </div>
               </div>
               
               <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-white/5 rounded-lg text-azbur-red group-hover:bg-azbur-red group-hover:text-white transition-colors">
                     <Mail size={20} />
                  </div>
                  <div>
                     <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                     <a href="mailto:azbur@gmail.com" className="text-white font-medium hover:text-azbur-red transition-colors block">
                        azbur@gmail.com
                     </a>
                  </div>
               </div>

               <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-white/5 rounded-lg text-azbur-red group-hover:bg-azbur-red group-hover:text-white transition-colors">
                     <MapPin size={20} />
                  </div>
                  <div>
                     <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t.footer.address_label}</p>
                     <p className="text-gray-300 text-sm leading-snug">
                        Xorazm Viloyati, Hazorasp tumani
                     </p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Column 4: Map */}
          <motion.div variants={itemVariants}>
             <h4 className="font-display font-bold text-lg uppercase tracking-wider mb-6 border-l-2 border-azbur-red pl-3">
              {t.footer.location_title}
            </h4>
            <div className="w-full h-56 rounded-lg overflow-hidden bg-white/5 relative group border border-white/10 hover:border-azbur-red/50 transition-colors">
               <iframe 
                 src="https://maps.google.com/maps?q=Hazorasp,Xorazm&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
                 allowFullScreen 
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 className="group-hover:filter-none transition-all duration-700 opacity-80 group-hover:opacity-100"
                 title="Map Location"
               />
               <a 
                 href="https://maps.google.com/maps?q=Hazorasp,Xorazm" 
                 target="_blank" 
                 rel="noreferrer"
                 className="absolute bottom-3 right-3 bg-azbur-red text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
               >
                 Open in Google Maps
               </a>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500"
        >
           <p>&copy; {currentYear} AZBUR. {t.footer.rights}</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </motion.div>
      </div>
    </footer>
  );
};
