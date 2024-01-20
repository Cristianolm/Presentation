/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      DMSansBold: ["DM Sans Bold", "sans-serif"],
      DMSansBoldItalic: ["DM Sans Bold Italic", "sans-serif"],
      DMSansMedium: ["DM Sans Medium", "sans-serif"],
      DMSansMediumItalic: ["DM Sans Medium Italic", "sans-serif"],
      DMSansRegular: ["DM Sans Regular", "sans-serif"],
      DMSansItalic: ["DM Sans Italic", "sans-serif"],
    },
    extend: {
      animation: {
        moon: "moonGrow 0.2s linear ",
        sun: "sunGrow 0.2s linear ",
        nameSmooth: "nameSmooth 1s linear",
        aboutSmooth: "aboutSmooth 1.8s linear",
        aboutSmooth2: "aboutSmooth2 1.8s linear",
        typing: "typing 3.5s steps(47, end)",
      },
      keyframes: {
        moonGrow: {
          "0%": { backgroundSize: "100% 100%" },
          "50%": { backgroundSize: "50% 50%" },
          "100%": { backgroundSize: "100% 100%" },
        },
        sunGrow: {
          "0%": { backgroundSize: "100% 100%" },
          "50%": { backgroundSize: "50% 50%" },
          "100%": { backgroundSize: "100% 100%" },
        },
        nameSmooth: {
          "0%": {
            position: "relative",
            color: "transparent",
            top: "20px",
            opacity: "0",
          },
          "100%": { position: "relative", top: "0px", opacity: "100" },
        },
        aboutSmooth: {
          "0%": {
            position: "relative",
            color: "transparent",
            opacity: "0",
          },
          "100%": { position: "relative", opacity: "100" },
        },
        aboutSmooth2: {
          "0%": {
            position: "relative",
            color: "transparent",
            opacity: "0",
          },
          "100%": { position: "relative", opacity: "100" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
