/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("tailwindcss")],
  theme: {
    extend: {
      colors: {
        "color-primary": "#18181B",
        "color-secondary": colors.neutral["400"],
      },
    },
  },
};
