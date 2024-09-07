/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#387F39',
        secondary: '#BEDC74',
        accent: '#F6E96B',
        dark: 'rgb(31, 31, 31)',
        light: '#f5f5f5',
        'light-yellow': '#f6e96b4a',
        'deep-yellow' : '#f6e96bcc',
        'dark-green' :'#175218',
        'custom-light-yellow': 'rgb(243 243 236)', // Added custom color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        
      },
      spacing: {
        '28': '7rem',   // New custom spacing
        '36': '9rem',   // New custom spacing
        '44': '11rem',  // New custom spacing
        '52': '13rem',  // New custom spacing
        '60': '15rem',  // New custom spacing
        '68': '17rem',  // New custom spacing
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
      },
      maxWidth: {
        '1280': '1280px',
      },
    },
  },
  plugins: [],
};
