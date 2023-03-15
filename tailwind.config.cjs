/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },

      screens: {
        xs: '480px',
      },

      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        c1: 'hsl(0, 0%, 98%)',
        c2: 'hsl(236, 33%, 92%)',
        c3: 'hsl(233, 11%, 84%)',
        c4: 'hsl(236, 9%, 61%)',
        c5: 'hsl(235, 19%, 35%)',
        c6: 'hsl(235, 21%, 11%)',
        c7: 'hsl(235, 24%, 19%)',
        c8: 'hsl(234, 39%, 85%)',
        c10: 'hsl(234, 11%, 52%)',
        c11: 'hsl(233, 14%, 35%)',
        c12: 'hsl(237, 14%, 26%)',
      },

      backgroundImage: {
        'check-bg': 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        'bg-img-desktop': 'var(--bg-img-desktop)',
        'bg-img-mobile': 'var(--bg-img-mobile)',
      },

      boxShadow: {
        'container-shadow':
          'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
      },
    },
  },
  plugins: [],
};
