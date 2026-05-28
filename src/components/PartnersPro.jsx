import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const partners = [
  { 
    id: 1, 
    name: "FitGo", 
    logo: "/fitgo-logo.png" 
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

export default function PartnersPro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="relative py-12 md:py-16 bg-blaze-bg transition-colors duration-500 border-b border-blaze-border/40 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blaze-text-main/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
        >
          <p className="font-rajdhani text-[10px] md:text-xs font-bold text-blaze-text-muted uppercase tracking-[0.3em] mb-8 md:mb-10">
            Fase Beta validada en colaboración con
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
        >
          {partners.map(partner => (
            <motion.div 
              key={partner.id} 
              variants={logoVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              /* CORRECCIÓN: Tamaño fijo para la caja (w-32 h-32 md:w-40 md:h-40) sin paddings extra */
              className="relative group flex flex-col items-center justify-center cursor-pointer w-32 h-32 md:w-40 md:h-40 rounded-[2rem] transition-all duration-500 hover:bg-blaze-text-main/5 border border-transparent hover:border-blaze-border/50 backdrop-blur-md hover:shadow-2xl hover:shadow-blaze-text-main/5"
            >
              
              <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white/10 to-transparent pointer-events-none transition-opacity duration-500" />

              {/* CORRECCIÓN: El logo es mucho más grande (w-20 md:w-28) llenando mejor la caja */}
              <img 
                src={partner.logo} 
                alt={`Logo de ${partner.name}`} 
                className="w-20 h-20 md:w-28 md:h-28 object-contain opacity-40 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 drop-shadow-sm"
              />
              
              {/* Ajusté un poquito el margen de la píldora para que quede pegadita a la caja nueva */}
              <div className="absolute -bottom-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="px-4 py-1.5 rounded-full bg-blaze-bg/80 border border-blaze-border/50 text-[10px] font-sans text-blaze-text-main tracking-[0.2em] uppercase font-bold backdrop-blur-xl shadow-lg">
                  {partner.name}
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}