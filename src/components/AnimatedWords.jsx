import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["tu comunidad.", "los atletas.", "tus metas.", "el futuro."];

export default function AnimatedWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    /*
      inline-grid apila las palabras en la misma celda.
      El "molde invisible" fuerza el ancho máximo en cada breakpoint
      para que nunca haya overflow ni recortes.
    */
    <span className="inline-grid overflow-hidden align-bottom text-blaze-accent">
      {/* Molde invisible — define el ancho con la palabra más larga */}
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap pr-1">
        tu comunidad.
      </span>

      {/* Palabras animadas */}
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="col-start-1 row-start-1 whitespace-nowrap pr-1"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}