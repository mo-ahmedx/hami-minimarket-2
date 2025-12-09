/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],

      },
      colors: {
        primaryBlue: '#3168B8',
        primaryYellow: '#F2C521',
        softBlue : '#8AA7B3',
        NeautralGrey : '#C4C4C4',
      },
      fontSize: {
        'heading-lg': '2.5rem',
        'heading-md': '1.875rem',
        'heading-sm': '1.25rem',
      },

      textColor: {
        primaryBlue: '#3168B8',
        primaryYellow: '#F2C521',
        softBlue : '#8AA7B3',
        NeautralGrey : '#C4C4C4',
      }
    },
  },
  plugins: [],
}

