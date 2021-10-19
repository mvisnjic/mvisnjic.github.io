module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        alfa: ["'Alfa Slab One' , 'cursive'"],
        notosans: ["'Noto Sans Mono', monospace"],
      },
      backgroundImage: {
        "background-body": "url('/static/background.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
