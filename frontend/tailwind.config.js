/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // Adjust if your project has a different structure
  ],
  theme: {
    extend: {
      colors: {
        secondaryLight: "#edf2f8",
        secondary: "#313bac",
        secondaryDark: "#312e81 ",
        black: "#030303",
        lightGray: "#e4e4e4",
        gray: "#6b7688",
        brown: "#46364a",
        white: "#ffffff"
      },
      fontFamily: {
        base: ["DM Sans", "sans-serif"]
      },
      boxShadow: {
        floatCard: "0 0 20px rgba(0, 0, 0, 0.2)",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        wave: "wave 3s linear infinite forwards",
      },

    }
  },
  plugins: []
};
