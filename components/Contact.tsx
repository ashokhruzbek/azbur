
import React, { useState, FormEvent } from 'react';
import { Check, Phone, Globe } from 'lucide-react';
import { Button } from './ui/Button';
import { Translations } from '../types';

const FloatingInput = ({ 
  label, 
  type = "text", 
  required = false,
  isTextArea = false 
}: { 
  label: string, 
  type?: string, 
  required?: boolean,
  isTextArea?: boolean 
}) => {
  return (
    <div className="relative group mt-6 first:mt-0">
       {isTextArea ? (
        <textarea 
          required={required}
          className="peer w-full h-32 bg-transparent border-b-2 border-gray-200 py-2 pt-6 text-azbur-black outline-none transition-all duration-300 focus:border-azbur-red focus:border-b-[3px] placeholder-transparent resize-none leading-relaxed"
          placeholder=" "
        />
       ) : (
        <input 
          required={required}
          type={type} 
          className="peer w-full bg-transparent border-b-2 border-gray-200 py-2 pt-6 text-azbur-black outline-none transition-all duration-300 focus:border-azbur-red focus:border-b-[3px] placeholder-transparent"
          placeholder=" "
        />
       )}
       
       <label className="absolute left-0 top-6 text-gray-500 transition-all duration-300 pointer-events-none origin-[0]
                         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                         peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-azbur-red peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider
                         peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:-translate-y-5 peer-[&:not(:placeholder-shown)]:text-gray-500 peer-[&:not(:placeholder-shown)]:font-bold peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-wider">
          {label}
       </label>
    </div>
  );
};

const ContactForm = ({ t }: { t: Translations }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  if (status === 'success') {
     return (
       <div className="h-full flex flex-col items-center justify-center text-center animate-pulse">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
             <Check size={40} />
          </div>
          <h4 className="text-2xl font-bold text-azbur-black mb-2">{t.contact.success_title}</h4>
          <p className="text-gray-500">{t.contact.success}</p>
       </div>
     );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FloatingInput label={t.contact.name_label} required />
      <FloatingInput label={t.contact.phone_label} type="tel" required />
      <FloatingInput label={t.contact.message_label} isTextArea />
      
      <div className="mt-8">
        <Button 
          variant="black" 
          className="w-full justify-center py-5"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? t.contact.submitting : t.contact.submit}
        </Button>
      </div>
    </form>
  );
};

interface ContactProps {
  t: Translations;
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-24 bg-azbur-gray relative">
      <div className="container mx-auto px-6 md:px-12">
         <div className="grid md:grid-cols-5 gap-12 bg-white shadow-2xl rounded-sm overflow-hidden">
            {/* Info Side */}
            <div className="md:col-span-2 bg-azbur-black text-white p-12 flex flex-col justify-between relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-3xl font-display font-bold mb-6">{t.contact.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {t.contact.subtitle}
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <Phone className="text-azbur-red mt-1" />
                        <div>
                           <p className="text-xs text-gray-500 uppercase tracking-wider">{t.contact.phone_label}</p>
                           <p className="text-lg font-medium">+998 94 234 0 234</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Globe className="text-azbur-red mt-1" />
                        <div>
                           <p className="text-xs text-gray-500 uppercase tracking-wider">{t.contact.office_label}</p>
                           <p className="text-lg font-medium">Hazorasp, Xorazm</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Decorative circles */}
               <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border-2 border-white/10 z-0" />
               <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-2 border-white/5 z-0" />
            </div>

            {/* Form Side */}
            <div className="md:col-span-3 p-12">
               <ContactForm t={t} />
            </div>
         </div>
      </div>
    </section>
  );
};
