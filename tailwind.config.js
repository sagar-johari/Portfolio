/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        animation: {
          marquee: 'marquee 20s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
        colors: {
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          primary: 'var(--color-primary)',
        },
      },
    },
    plugins: [],
  };
  