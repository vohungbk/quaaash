/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-pattern': "url('/img/banner-home.svg')",
        artist: "url('/img/artist2.svg')",
      },
      colors: {
        primary: '#9A60DB',
        secondary: '#161540',
        violet: 'linear-gradient(180deg, #7140CA 0%, #9A60DB 100%)',
        black04: 'rgba(0, 0, 0, 0.04)',
        black025: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        white: '#ffffff',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
