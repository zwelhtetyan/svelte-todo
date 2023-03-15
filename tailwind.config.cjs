/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },

      screens: {
        xs: '480px',
      },

      colors: {
        'bright-blue': 'var(--bright-blue)',
      },

      backgroundColor: {
        'check-bg': 'var(--check-bg)',
      },

      backgroundImage: {
        'bg-img-desktop': 'var(--bg-img-desktop)',
        'bg-img-mobile': 'var(--bg-img-mobile)',
      },
    },
  },
  plugins: [],
};
