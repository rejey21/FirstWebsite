/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        'sm': '360px',
        'md': '768px',
        'lg': '1080px',
        'xl': '1440px',
        '2xl': '1536px',
      },
      fontFamily: {
        'myFont': 'Lexend, sans-serif',
      },
      margin: {
        'margin133': '133px',
        'margin74': '74px',
        'margin650': '650px',
      },
      padding: {
        'paddingLow': '30px',
      },
      width: {
        'NameOfBlock': '16rem',
      },
      listStyleImage: {
        checkmark: 'url("/img/checkmark.png")',
      },
    },
  },
  plugins: [],
}

