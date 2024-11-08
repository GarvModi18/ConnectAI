/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mochiy: ["Mochiy Pop P One", "sans-serif"],
        Mont: ["Montserrat", "sans-serif"],
        Comf: ["Comfortaa", "sans-serif"],
      },
      colors: {
        customPlaceholder: '#e57373',
      },
      letterSpacing: {
        'extra-widest': '0.2em',
        'normal-wide': '0.05em',
      },
      fontWeight: {
        'SOFT': '100',
      }
    },
  },
  plugins: [],
};
