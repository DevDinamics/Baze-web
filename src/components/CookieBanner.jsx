import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          /*
            Mobile: ocupa todo el ancho pegado al fondo (bottom sheet style)
            sm+: tarjeta flotante en esquina inferior derecha
          */
          className="
            fixed z-50
            bottom-0 left-0 right-0
            sm:bottom-4 sm:right-4 sm:left-auto
            sm:max-w-sm sm:rounded-3xl
            bg-white
            rounded-t-3xl
            shadow-2xl
            border border-zinc-100
            p-5 sm:p-6
          "
        >
          <div className="relative">
            {/* Botón cerrar */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute -top-1 right-0 sm:-top-2 sm:-right-2 p-1.5 rounded-full bg-zinc-100 text-zinc-400 hover:bg-zinc-200 transition-colors"
              aria-label="Cerrar"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Handle visual en mobile (como bottom sheet) */}
            <div className="sm:hidden w-10 h-1 bg-zinc-200 rounded-full mx-auto mb-5" />

            <h3 className="font-heading font-bold text-zinc-950 mb-2 text-sm sm:text-base">
              Preferencias de privacidad
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mb-5 leading-relaxed">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia. Puedes personalizar tus preferencias a continuación.
            </p>

            {/* Botones */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsVisible(false)}
                className="w-full py-2.5 sm:py-3 bg-zinc-950 text-white font-bold rounded-xl text-sm hover:bg-zinc-800 transition-colors"
              >
                Aceptar todas
              </button>
              <button className="w-full text-sm text-zinc-500 font-medium py-1.5 hover:text-zinc-700 transition-colors">
                Personalizar
              </button>
              <button className="w-full text-xs text-zinc-400 font-medium py-1 underline hover:text-zinc-500 transition-colors">
                Rechazar no esenciales
              </button>
            </div>

            <p className="mt-4 text-[10px] text-zinc-400 leading-snug">
              Al hacer clic en "Aceptar todas", aceptas el uso de todas las cookies según nuestra{' '}
              <a href="/privacy" className="underline font-medium text-zinc-500 hover:text-zinc-700">
                Política de Privacidad
              </a>.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}