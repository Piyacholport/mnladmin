/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#07aa81',
					500: '#07906e',
					600: '#07906e',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B',

				},
				greenct: "#07906e",
				greenhoverct: "#07aa81",
				greenfocus: "79e3c8",
				yellowct: "#fde60c",

			}
		},
		fontFamily: {
			sans: ['Inter var, sans-serif', { fontFeatureSettings: '"cv11", "ss01"' }],
			Salakonlinenumber: ['Salakonlinenumber'],
			Salakonlineairy: ['Salakonlineairy'],
			Salakonlinebarcode: ['Salakonlinebarcode'],
			Salakonlinebookthai: ['Salakonlinebookthai'],
			Salakonlinelesson: ['Salakonlinelesson'],
			Salakonlineorange: ['Salakonlineorange'],
			Salakonlineset: ['Salakonlineset'],
			Salakonlinethaiy: ['Salakonlinethaiy'],
			SalakonlineTab: ['SalakonlineTab'],
			Salakonlineyello: ['Salakonlineyello'],
			Salakonline80: ['Salakonline80'],
			SalakonlineairyV2: ['SalakonlineairyV2'],
			SalakonlinenumberV2: ['SalakonlinenumberV2']
		}
	},

	plugins: [require('flowbite/plugin')]
	//plugins: []
};

module.exports = config;
