import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1E3A5F",
          50: "#EEF2F7",
          100: "#DCE4EE",
          200: "#B5C4D8",
          300: "#8DA4C1",
          400: "#5C7EA0",
          500: "#1E3A5F",
          600: "#1A3355",
          700: "#152943",
          800: "#101F33",
          900: "#0B1522",
        },
        lavender: {
          light: "#E8E4F3",
        },
        mint: {
          light: "#DFF0EA",
        },
        gold: {
          DEFAULT: "#E8B04E",
          light: "#F3D394",
          dark: "#C88F2E",
        },
        alert: {
          DEFAULT: "#D5473A",
          light: "#F9DEDB",
          dark: "#B23A2F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
      },
      backgroundImage: {
        "app-gradient": "linear-gradient(160deg, #E8E4F3 0%, #DFF0EA 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(30, 58, 95, 0.06)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
