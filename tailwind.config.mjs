/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				worksans: 'Work Sans, sans-serif'
			},
			textColor:{
				cyan:'#2acfcf',
			}
		},
	},
	plugins: [],
}
