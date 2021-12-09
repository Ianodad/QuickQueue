const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      display: ['Oswald'],
    },
    colors: {
      ...colors,
      primary: '#41436A',
      secondary: '#DC7957',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      primary: '#41436A',
      secondary: '#DC7957',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
