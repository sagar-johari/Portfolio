/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{ts,tsx}",  // if using /app directory
      "./pages/**/*.{ts,tsx}", // if using /pages directory
      "./components/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  