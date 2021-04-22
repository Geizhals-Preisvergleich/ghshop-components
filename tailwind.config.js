const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      }
    }
  }
}
