import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    screens: {
      sm: "430px",
      // => @media (min-width: 576px) { ... }

      md: "1024px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "gray-1": "#c4c4c4",
      "gray-2": "#858585",
      "gray-3": "#c2c2c2",
      "dark-1": "#1b1b1b",
    },
  },
  plugins: [],
  "headwind.runOnSave": true,
};
export default config;
