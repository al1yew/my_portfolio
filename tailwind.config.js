/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/data/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#151515",
          900: "#1f1f1f",
          800: "#2b2b2b",
          700: "#454545",
          500: "#707070",
          300: "#b8b8b8",
          200: "#d6d6d6",
          100: "#eeeeee",
          50: "#f7f5f0",
        },
        signal: {
          teal: "#0f766e",
          blue: "#2563eb",
          amber: "#b45309",
          rose: "#be123c",
        },
      },
      boxShadow: {
        soft: "0 18px 55px rgba(21, 21, 21, 0.08)",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
