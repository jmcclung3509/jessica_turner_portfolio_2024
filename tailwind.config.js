module.exports = {
	content: [
		"./assets/**/*.{vue,js,css}",
		"./components/**/*.{vue,js}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	variants: {
		extend: {},
	},
	plugins: [],
	theme: {
		screens: {
			xs: "500px",
			sm: "768px",
			md: "1024px",
			lg: "1280px",
			xl: "1440px",
			xxl: "1600px",
			jumbo: "1920px",
		},
		extend: {
			fontSize: {
				"xs": ["0.95rem", "1.5"],
				"xs-tight": ["0.95rem", "1"],
				"1.2xl": ["1.2rem", "1.5"],
				"1.5xl": ["1.5rem", "1.5"],
				"2xl": ["2rem", "1.25"],
				"2.5xl": ["2.5rem", "1.25"],
				"3xl": ["3rem", "1.25"],
				"3.5xl": ["3.5rem", "1.25"],
				"4xl": ["4rem", "1.5"],
				"4xl-tight": ["4rem", "1.25"],
				"5xl": ["4.8rem", "1.25"],
				"6xl": ["6rem", "1.25"],
				"7xl": ["7rem", "1.25"],
				"8xl": ["8rem", "1.25"]
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				"default-white": "#fff",
				"default-dark": "#061621",
				"default-dark-purple": "#100D48",
				"default-purple": "#7014f2",
				"default-light-purple": "#d38ff0",
				// "default-blue": "#7BC9FF",
				"default-blue": "#006cfa",
				"default-dark-blue": "#0E417B",
				"default-mint": "#00f59b",
				"default-green": "#00aa57",
				"default-dark-green": "#00684a",
							},
			backgroundImage: {
			
			},
			fontFamily: {
				montserrant: ["Montserrat", "sans-serif"],
				heptaSlab: ["Hepta Slab", "serif"],
			},
			container: {
				padding: {
					DEFAULT: "2rem",
				},
			},
			screens: {
				"max-phone": { max: "639px" },
			},
		},
	},
};
