import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const benefits = [
  {
    id: 1,
    title: "Optimiza tu tiempo",
    description: "Gestiona a todos tus atletas, diseña rutinas y haz seguimiento desde un solo panel profesional. Adiós a los chats desordenados.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Comunidad Exclusiva",
    description: "Construye y escala tu propia comunidad. Conecta con tus atletas y fomenta la motivación en un entorno diseñado 100% para el fitness.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Métricas Precisas",
    description: "Visualiza el progreso real con métricas detalladas, volumen de carga y cumplimiento de macros en tiempo real.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Ecosistema Sincronizado",
    description: "Tu negocio fitness siempre contigo. Acceso instantáneo y fluido desde cualquier dispositivo para ti y tus clientes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export default function BenefitsPro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-blaze-bg transition-colors duration-500">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="font-rajdhani text-[10px] sm:text-xs font-bold text-blaze-accent uppercase tracking-[0.2em] mb-4 block">
            Beneficios
          </span>
          <h2
            className="font-heading font-black text-blaze-text-main tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            ¿Por qué <span className="text-blaze-accent">Blaze</span>?
          </h2>
        </div>

        {/* Grid — 1 col mobile, 2 col md+ */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] bg-blaze-text-main/5 border border-blaze-border hover:bg-blaze-text-main/10 transition-colors duration-300 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start"
            >
              {/* Icono */}
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blaze-text-main/10 text-blaze-text-main flex items-center justify-center">
                {benefit.icon}
              </div>

              {/* Texto */}
              <div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-blaze-text-main mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="font-sans text-blaze-text-muted leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}