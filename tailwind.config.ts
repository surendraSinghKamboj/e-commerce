import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
          '50': '#fef2f3',
          '100': '#fde6e7',
          '200': '#fbd0d5',
          '300': '#f7aab2',
          '400': '#f27a8a',
          '500': '#ea546c',
          '600': '#d5294d',
          '700': '#b31d3f',
          '800': '#961b3c',
          '900': '#811a39',
          '950': '#48091a',
      },
      'secondary': {
        '50': '#f3f1ff',
        '100': '#ebe5ff',
        '200': '#d9ceff',
        '300': '#bea6ff',
        '400': '#9f75ff',
        '500': '#843dff',
        '600': '#7916ff',
        '700': '#6b04fd',
        '800': '#5a03d5',
        '900': '#4b05ad',
        '950': '#2c0076',
    },          
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
