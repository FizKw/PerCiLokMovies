/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      spacing: {
        100: "26rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
