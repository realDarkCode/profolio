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
      },
      boxShadow: {
        floatCard: "0 0 20px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },

      },
    }
  },
  plugins: []
};
