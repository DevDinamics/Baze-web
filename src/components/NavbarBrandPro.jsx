import React, { useState, useEffect } from 'react';

export default function NavbarBrandPro() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const handler = (e) => setIsDark(e.detail.theme === 'dark');
    window.addEventListener('themeChanged', handler);
    return () => window.removeEventListener('themeChanged', handler);
  }, []);

  return (
    <a href="/" className="flex items-center gap-2.5 group flex-shrink-0">
      <div className="relative w-8 h-8">
        <img
          src={isDark ? '/logo-blaze-light.png' : '/logo-blaze-dark.png'}
          alt="Blaze Logo"
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </a>
  );
}