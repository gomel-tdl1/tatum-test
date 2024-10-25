/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "320px",
        md: "640px",
        lg: "1200px",
        xl: "1500px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        purpleShadow: "#673ab8aa",
        // neutral
        neutral_1: "#717175",
        // primary
        primary_1: "#000000",
        primary_2: "#4237ff"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
