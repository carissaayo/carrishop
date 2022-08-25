/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "840px",
      lg: "1098px",
      xl: "1280px",
      "2xl": "1400px",
    },
    colors: {
      primaryColor: "white",
      secondaryColor: "#F9C80E",
      black: "#000000",
      
    },
    extend: {},
  },
  plugins: [],
};
