/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#06141B',
        primary: '#00C2A8',
        accent: '#00C2A8',
        secondaryText: 'rgba(255,255,255,.85)',
        subtleText: 'rgba(255,255,255,.70)',
        glass: 'rgba(255,255,255,.06)',
      },
      boxShadow: {
        soft: '0 10px 35px rgba(0,0,0,.35)',
      },
      fontFamily: {
        poppins: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};



