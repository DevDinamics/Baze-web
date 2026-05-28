import React from 'react';
import { motion } from 'framer-motion';
import AnimatedWords from './AnimatedWords';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, filter: "blur(5px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { type: 'spring', stiffness: 120, damping: 22 } }
};

export default function BlazeHeroPro() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-visible"
    >
      {/* Badge */}
      <motion.div
        variants={itemVariants}
        className="mb-6 sm:mb-8 px-4 py-1.5 rounded-full border border-blaze-border bg-blaze-text-main/5 backdrop-blur-sm shadow-inner"
      >
        <span className="font-rajdhani text-[10px] sm:text-xs font-bold text-blaze-text-muted uppercase tracking-[0.2em]">
          Plataforma Fitness 
        </span>
      </motion.div>

      {/* Título — fluid de 3rem a 7rem sin saltos bruscos */}
      <motion.h1
        variants={itemVariants}
        style={{ fontSize: "clamp(2.75rem, 9vw, 7rem)" }}
        className="font-sans font-black tracking-tighter text-blaze-text-main mb-6 sm:mb-8 leading-[1.05] max-w-5xl"
      >
        Lleva el fitness a{' '}
        {/* En mobile el line-break se hace natural por el width */}
        <span className="block sm:inline">
          <AnimatedWords />
        </span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        variants={itemVariants}
        className="font-sans text-base sm:text-lg md:text-xl text-blaze-text-muted mb-10 sm:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl leading-relaxed px-2"
      >
        Eleva el estándar de tu coaching. Centraliza rutinas, monitorea el rendimiento en tiempo real y haz crecer a tu comunidad en un ecosistema digital de primer nivel.      </motion.p>

      {/* Botones — stack en mobile, row en sm+ */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto px-8 py-3.5 bg-blaze-text-main text-blaze-button-text font-semibold rounded-full text-base shadow-lg shadow-blaze-text-main/10 hover:shadow-blaze-text-main/15 transition-all"
        >
          Solicitar Beta
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "rgba(161,161,166,0.1)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-blaze-border text-blaze-text-main font-semibold rounded-full text-base transition-all"
        >
          Aprender más
        </motion.button>
      </motion.div>
    </motion.section>
  );
}