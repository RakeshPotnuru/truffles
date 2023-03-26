/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

const siteConfig = require('./config/site.config.json');

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: siteConfig.colors,
		fontFamily: {
			sans: ['var(--font-inter)', ...fontFamily.sans],
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
