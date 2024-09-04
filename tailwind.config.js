/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      pdBlue: "#002169",
      pdLightBlue: "#04A9FF",
      pdRed: "#E81C2C",
      pdYellow: "#FFC600",
      pdMedical: "#056836",
      pdNurse: "#FF4B00",
      pdGray: "rgb(107 114 128)",
      pdLightGray: "rgb(209 213 219)",
      pdDark: "rgb(31 41 55)",
      pdTranGray: "#ffffff38",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
