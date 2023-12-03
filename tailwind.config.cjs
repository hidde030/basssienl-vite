const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    colors: {
      card_purple: "#6806FA",
      card_bg: "#36393F",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#8E9297",
      faceit: "#FFA500",
      admin: "#FF0000",
      discord: "#7289DA",
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      print: { raw: "print" },
    },
    extend: {},
  },
  plugins: [],
}
