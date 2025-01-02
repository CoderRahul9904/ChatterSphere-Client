/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chatter-bg': '#1E1E2E',
        chatter: {
          start: '#1E1E2E',
          mid: '#2E2E4E',
          end: '#6A5FA8',
        },
      },
    },
  },
  plugins: [],
};
