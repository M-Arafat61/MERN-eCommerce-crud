/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        dark: "#2d2d2d",
        light: "#f5f5f5 ",
      },
      textColor: {
        dark: "#00000",
        light: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
