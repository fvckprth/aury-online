/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      './page/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ]
  },
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': '#232323', // Custom background color
      },
      textColor: {
        'custom-text': '#9A9A9A', // Custom text color
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
  variants: {},
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