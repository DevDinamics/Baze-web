import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const wellnessFeatures = [
  {
    id: 1,
    title: "Check-in Diario",
    description: "Registra tu nivel de estrés, horas de sueño y energía en segundos antes de entrenar.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Ajuste Inteligente",
    description: "Tu instructor visualiza tu fatiga y adapta el volumen y las cargas para evitar el sobreentrenamiento.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Red de Soporte",
    description: "Encuentra apoyo motivacional real en una comunidad que entiende los retos de tu proceso.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
};

export default function MentalWellnessPro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-blaze-bg transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-rajdhani text-[10px] sm:text-xs font-bold text-blaze-text-muted uppercase tracking-[0.25em] mb-5 sm:mb-6 border border-blaze-border px-4 py-1.5 rounded-full bg-blaze-text-main/5 backdrop-blur-sm"
          >
            PRÓXIMAMENTE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-blaze-text-main tracking-tight mb-6 sm:mb-8 leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Mente enfocada.{' '}
            <br className="hidden sm:block" />
            <span className="text-blaze-text-main/40">Cuerpo imparable.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-blaze-text-muted text-base sm:text-lg md:text-xl leading-relaxed"
          >
            El bienestar real va más allá de los levantamientos. Blaze te brinda las herramientas para medir tu recuperación y mantener el equilibrio físico y mental.
          </motion.p>
        </div>

        {/* Grid — 1 col mobile, 3 col md+ */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {wellnessFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] bg-blaze-text-main/5 border border-blaze-border backdrop-blur-md hover:bg-blaze-text-main/10 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blaze-bg border border-blaze-border flex items-center justify-center text-blaze-text-main mb-5 sm:mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-blaze-text-main mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-blaze-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}