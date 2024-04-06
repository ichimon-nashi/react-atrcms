/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"theme-gray": "#525d61",
				"theme-gray-light": "#719184",
				"theme-gray-dark": "#3c4347",
				"theme-green": "#8fd400",
				"theme-red": "#ff0b27",
			},
		},
	},
	plugins: [],
};
