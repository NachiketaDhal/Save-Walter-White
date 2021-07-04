module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#00FF66',
        },
        gray: {
          light: '#242424',
          dark: '#0C0C0C',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
