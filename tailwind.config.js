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
        customHoverColor: "hsl(10, 72%, 66%)",
        customHoverColorSecond: "hsl(10, 100%, 80%)",
        customFooterColor: "hsl(264, 4%, 11%)",
        customParagraphColor: "hsl(264, 5%, 20%)",
        customBgImageWithText: "hsl(14, 76%, 97%)",
      },
      backgroundImage: {
        bgpatternsmallcircle: "/shared/desktop/bg-pattern-small-circle.svg",
        bgpatternleaf: "/shared/desktop/bg-pattern-leaf.svg",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
