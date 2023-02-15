/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Darkcyan: "hsl(158, 36%, 37%)",
        Cream: "hsl(30, 38%, 92%)",
        Verydarkblue: "hsl(212, 21%, 14%)",
        Darkgrayishblue: "hsl(228, 12%, 48%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Montesart: "'Montserrat', sans-serif",
        Fraunces: "'Fraunces', serif",
      },
    },
  },
  plugins: [],
};
