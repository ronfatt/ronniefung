import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FAF9F5",
          100: "#F4F1EA",
          200: "#EBE5D8",
          300: "#DCD3C0",
          400: "#C4B69E",
          900: "#1A1916",
        },
        charcoal: {
          950: "#0A0C0B",
          900: "#111413",
          850: "#161A18",
          800: "#1D2220",
          700: "#2B322E",
          600: "#444F49",
          500: "#606F67",
          400: "#86968E",
          300: "#B2BFB8",
          200: "#D9E1DC",
          100: "#EEF2EF",
        },
        jade: {
          950: "#06150F",
          900: "#0C261B",
          800: "#143D2C",
          700: "#1E543D",
          600: "#286D4F",
          500: "#328B65",
          400: "#3EAA7C",
          300: "#5FCB9C",
          200: "#96E3BE",
          100: "#D2F5E4",
          50: "#EDFAF3",
        },
        neon: {
          green: "#00E599",
          glow: "rgba(0, 229, 153, 0.25)",
        },
        bronze: {
          900: "#3D2A14",
          800: "#5D411F",
          700: "#825D2C",
          600: "#A97A3B",
          500: "#C7954D",
          400: "#DCAD69",
          300: "#E9C58D",
          200: "#F3DCB7",
          100: "#F9EEDD",
          50: "#FCF8F2",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "sans-serif"],
        serif: ["var(--font-serif)", "Noto Serif SC", "Songti SC", "Source Han Serif SC", "Georgia", "serif"],
      },
      boxShadow: {
        'soft-glow': '0 0 50px -10px rgba(50, 139, 101, 0.2)',
        'neon-glow': '0 0 35px -5px rgba(0, 229, 153, 0.3)',
        'gold-glow': '0 0 50px -10px rgba(199, 149, 77, 0.2)',
        'editorial': '0 20px 40px -15px rgba(17, 20, 19, 0.08)',
        'card-hover': '0 25px 50px -12px rgba(12, 38, 27, 0.12)',
        'editorial-dark': '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
export default config;
