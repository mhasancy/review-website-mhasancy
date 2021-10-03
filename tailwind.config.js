module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: "red",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
