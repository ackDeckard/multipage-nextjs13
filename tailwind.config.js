/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        customPeach: "hsl(11, 73%, 66%)",
        customLightPeach: "hsl(11, 100%, 80%)",
        customBlack: "hsl(270, 3%, 11%)",
        customDarkGrey: "hsl(264, 5%, 20%)",
        white: "hsl(0, 0%, 100%)",
        customLightGrey: "hsl(210, 17%, 95%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
