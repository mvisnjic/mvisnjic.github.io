/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        shareTech: ['"Share Tech Mono"', "monospace"],
        bungee: ['"Bungee"', "cursive"],
      },
    },
  },
  plugins: [],
};
