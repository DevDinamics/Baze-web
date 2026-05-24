import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite'; // Importamos el compilador nativo v4

// https://astro.build/config
export default defineConfig({
  // Solo la integración de React
  integrations: [react()],
  // Inyectamos Tailwind v4 directamente en Vite
  vite: {
    plugins: [tailwindcss()],
  },
});