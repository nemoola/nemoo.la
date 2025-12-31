import type { Config } from "tailwindcss";

export default {
  content: ["./components/**/*.{js,vue,ts}", "./pages/**/*.vue"],

  theme: {
    extend: {
      colors: {
        text: "#2c373b",
        background: "#f2f7f9",
        primary: "#0095cc",
        secondary: "#979dd8",
        accent: "#b33ff4",
      },
      dropShadow: {
        primary: "0 0px 10px rgba(0, 149, 204, 0.5)",
        gradient: [
          "0 0px 20px rgba(0, 149, 204, 0.5)",
          "0 0px 20px rgba(179, 63, 244, 0.5)",
        ],
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
        sans: ['"M PLUS 1"', "sans-serif"],
      },
      animation: {
        blink: "blink 1s infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
    },
  },

  plugins: [],
} satisfies Config;
