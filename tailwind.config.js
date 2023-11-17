/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        darkMain: "#2C3333",
        main: "#2E4F4F",
        sub: "#0E8388",
        accent: "#CBE4DE",
      },
    },
  },
  plugins: [],
};
