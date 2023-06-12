/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				BtnCooL: '#ce452a',
			},
			boxShadow: {
				CooL: '0px 0px 10px rgba(0, 0, 0, 0.1)',
			},
		},
	},
	plugins: [],
}
