import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SunIcon() {
  return (
    <svg className="w-5 h-5 text-blaze-accent" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm6.364 1.636a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM22 12a1 1 0 01-1 1h-2a1 1 0 010-2h2a1 1 0 011 1zm-1.636 6.364a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 011.414-1.414l1.414 1.414a1 1 0 010 1.414zM12 22a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zm-6.364-1.636a1 1 0 010-1.414l1.414-1.414a1 1 0 011.414 1.414l-1.414 1.414a1 1 0 01-1.414 0zM2 12a1 1 0 011-1h2a1 1 0 010 2H3a1 1 0 01-1-1zm1.636-6.364a1 1 0 011.414 0l1.414 1.414A1 1 0 115.05 8.464L3.636 7.05a1 1 0 010-1.414z" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5 text-blaze-text-main" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.1 2.9C11 3.9 10 5.4 10 7c0 3.3 2.7 6 6 6 1.6 0 3.1-1 4.1-2.1-.4 4.5-4.3 8-8.8 8C6.6 18.9 3 15.3 3 10.8c0-4.5 3.5-8.4 8-8.8z" />
    </svg>
  );
}

export default function ThemeTogglePro() {
  // ✅ CLAVE: siempre iniciar con null para que SSR y cliente coincidan
  const [theme, setTheme] = useState(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Solo se ejecuta en el cliente, nunca en SSR
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    applyTheme(saved);
  }, []);

  function applyTheme(t) {
    const root = document.documentElement;
    if (t === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', t);
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: t } }));
  }

  function handleToggle() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      applyTheme(nextTheme);
      return;
    }

    const btn = buttonRef.current;
    const rect = btn ? btn.getBoundingClientRect() : { left: window.innerWidth, top: 0, width: 40, height: 40 };
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
      applyTheme(nextTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`] },
        { duration: 500, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
      );
    });
  }

  // ✅ Mientras no sabemos el tema (SSR), renderizamos placeholder del mismo tamaño
  if (theme === null) {
    return <div className="w-10 h-10 rounded-full" />;
  }

  return (
    <motion.button
      ref={buttonRef}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleToggle}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-blaze-text-main/5 border border-blaze-border backdrop-blur-md text-blaze-text-main hover:bg-blaze-text-main/10 transition-colors shadow-inner z-[60]"
      aria-label="Toggle Dark Mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, scale: 0.6, rotate: -60, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.6, rotate: 60, filter: "blur(5px)" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="absolute flex items-center justify-center"
        >
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}