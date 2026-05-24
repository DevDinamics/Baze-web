/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,postcss,pt,scss,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blaze: {
					bg: '#0D0D0F', 
					accent: '#ffa500', 
					'text-main': '#F2F2F2', 
					'text-muted': '#A1A1A6' 
				},
			},
			// Aquí integramos tus fuentes personalizadas
			fontFamily: {
				sans: ['Poppins', 'sans-serif'], 
				heading: ['Montserrat', 'sans-serif'],
				rajdhani: ['Rajdhani', 'sans-serif'],
			},
		},
	},
	plugins: [],
}