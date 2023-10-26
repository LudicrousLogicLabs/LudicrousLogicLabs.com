/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  darkMode: false,
  theme: {
    extend: {
      textColor: {
        "navy-blue": "#001F3F",
      },
    },
  },
  plugins: [],
};
