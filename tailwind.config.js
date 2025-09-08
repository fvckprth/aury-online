/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./page/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': '#000000', // Custom background color
      },
      textColor: {
        'custom-text': '#FFFFFF', // Custom text color
      },
      fontFamily: {
        'NeueHaasDisplay': ['NeueHaasDisplay', 'sans']
      },
      fontWeight: {
        'light': 300,  // Corresponds to light font variant
        'medium': 500  // Corresponds to medium font variant
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.small-bullet li::before': {
          content: '"\\2022"',
          color: 'inherit',
          fontWeight: 'bold',
          display: 'inline-block',
          width: '1em',
          marginLeft: '-1em',
          fontSize: '0.75em'
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}