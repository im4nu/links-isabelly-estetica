/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      main: ["Great Vibes", "cursive"],
      nunito: ["Nunito", "sans-serif"],
    },
    colors: {
      main: "#8F50B6",
      white: "#ffffff",
      light: "#ffffff90",
    },
    backgroundImage: {
      service: "url('/assets/images/services-bg.png')",
    },
  },
  plugins: [],
};
