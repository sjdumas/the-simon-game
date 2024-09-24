/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
    },
    screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
  },
  plugins: [
    require("postcss-import"),
		require("tailwindcss"),
		require("autoprefixer"),
  ],
};
