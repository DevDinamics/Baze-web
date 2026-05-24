import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const partners = [
  { 
    id: 1, 
    name: "FitGo", 
    logo: "/fitgo-logo.png" 
  },
];

export default function PartnersPro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-6 md:py-10 bg-blaze-bg transition-colors duration-500 border-b border-blaze-border/40">
      <div className="max-w-4xl mx-auto text-center px-6">
        
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="font-rajdhani text-[10px] md:text-xs font-bold text-blaze-text-muted uppercase tracking-[0.3em] mb-6"
        >
          Fase Beta validada en colaboración con
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
        >
          {partners.map(partner => (
            <div key={partner.id} className="relative group flex flex-col items-center justify-center cursor-pointer">
              
              <img 
                src={partner.logo} 
                alt={`Logo de ${partner.name}`} 
                className="h-16 md:h-20 object-contain opacity-40 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 drop-shadow-sm"
              />
              
              <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-sans text-blaze-text-muted tracking-wider uppercase font-semibold">
                {partner.name}
              </span>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}