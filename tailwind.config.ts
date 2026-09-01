import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep green — primary brand colour, evokes the crop canopy
        forest: {
          50: "#eef4f0",
          100: "#d3e4da",
          200: "#a7c9b5",
          300: "#79ac8f",
          400: "#4f8f6c",
          500: "#2f7250",
          600: "#1f5a3e",
          700: "#194a33",
          800: "#153d2a",
          900: "#0e2b1d",
          950: "#081c13",
        },
        // Mango yellow — secondary brand colour, the signature fruit
        mango: {
          50: "#fff8e6",
          100: "#ffedbf",
          200: "#ffdd85",
          300: "#ffc94a",
          400: "#fdb821",
          500: "#f4a300",
          600: "#cf8600",
          700: "#a56900",
          800: "#7a4e08",
          900: "#5c3c0c",
        },
        soil: {
          400: "#a2764f",
          500: "#7a4e2d",
          600: "#5c3a20",
          700: "#402813",
        },
        cream: "#FFFCF5",
        ink: "#15201a",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "row-grid":
          "repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(255,255,255,0.06) 38px, rgba(255,255,255,0.06) 39px)",
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
