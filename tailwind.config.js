/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      smMax: { max: "480px" },
      mdMax: { max: "768px" },
      lgMax: { max: "976px" },
      xlMax: { max: "1440px" },
    },
    extend: {
      colors: {
        darkGreen: "#0B3727",
        lightGreen: "#718981",
        eggshell: "#EFE6D6",
        plantinum: "#E2E7E5",
        black: "#1B1C1B",
        white: "#FFFFFF",
        lightGray: "#5C5C5C",
      },
    },
  },
  plugins: [],
};
