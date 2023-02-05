/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      light: {
        font: '#1f1f1f',
        background: '#ffffff',
        fontColored: '#0b57d0',
        container: '#0b57d0',
        secondaryContainer: '#c2e7ff',
        fontContainer: '#ffffff',
        surface: '#f3f6fc',
        surfaceSecondary: '#f8fafd',
        fontSurface: '#444746',
      },
      dark: {
        container: '#a8c7fa',
        secondaryContainer: '#004a77',
        background: '#1f1f1f',
        font: '#e3e3e3',
        fontColored: '#a8c7fa',
        fontContainer: '#062e6f',
        surface: '#2d2f31',
        surfaceSecondary: '#28292a',
        fontSurface: '#c4c7c5',
      },
    },
    fontFamily: {
      light: 'Product Sans Light',
      regular: 'Product Sans',
      medium: 'Product Sans Medium',
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        openMenu: 'openMenu 0.4s ease-in-out forwards',
        closeMenu: 'closeMenu 0.4s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        openMenu: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        closeMenu: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
