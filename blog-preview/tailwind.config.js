/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary))',
        light: 'hsl(var(--color-light))',
        gray950: 'hsl(var(--color-gray950))',
        gray500: 'hsl(var(--color-gray500))',
      },
      boxShadow: {
        blogShadow: '5px 5px rgba(0,0,0,1)',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
