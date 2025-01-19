/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // Adjust if your project has a different structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#edf2f8",
        secondary: "#313bac",
        black: "#030303",
        lightGray: "#e4e4e4",
        gray: "#6b7688",
        brown: "#46364a",
        white: "#ffffff"
      },
      fontFamily: {
        base: ["DM Sans", "sans-serif"]
      }
    }
  },
  plugins: []
};
