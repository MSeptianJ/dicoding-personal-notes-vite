/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Inter Var", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        secondary: "#003e64",
        primary: "#004f80",
        accent: "#ff7017",
        back: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
