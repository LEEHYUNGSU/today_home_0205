import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        bmjua: ['BMJUA', 'sans-serif'],
      },
      colors: {
        themeBlue: "#2EC4E6",
        themeNavy: "#0F103A",
      }
    },
  },
  plugins: [],
} satisfies Config;
