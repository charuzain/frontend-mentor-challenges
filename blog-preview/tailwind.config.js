/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      colors: {
        primary:'hsl(var(--color-primary))',
        light:'hsl(var(--color-light))',
        gray950:'hsl(var(--color-gray950))',
        gray500:'hsl(var(--color-gray500))',
      },
    },
  },
  plugins: [],
};
