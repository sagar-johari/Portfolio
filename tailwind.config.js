/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          primary: 'var(--color-primary)',
        },
      },
    },
    plugins: [],
  };
  