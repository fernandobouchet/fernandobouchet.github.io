/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      light: {
        font: '#1f1f1f',
        background: '#ffffff',
        primaryContainer: '#0b57d0',
        secondaryContainer: '#c2e7ff',
        fontContainer: '#ffffff',
        surface: '#f3f6fc',
        surfaceSecondary: '#f8fafd',
        fontSurface: '#444746',
      },
      dark: {
        primaryContainer: '#a8c7fa',
        secondaryContainer: '#004a77',
        background: '#1f1f1f',
        font: '#e3e3e3',
        fontContainer: '#062e6f',
        surface: '#2d2f31',
        surfaceSecondary: '#28292a',
        fontSurface: '#c4c7c5',
      },
    },
    fontFamily: {
      light: 'Product Sans Light',
      medium: 'Product Sans Medium',
      bolder: 'Product Sans Black',
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
