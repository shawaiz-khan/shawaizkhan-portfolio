import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E6F1FF",
        lightGray: "#F0F4F8",
        secondary: "#1E2A38",
        highlight: "#9A4DFF",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        fira: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;