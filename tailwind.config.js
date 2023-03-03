module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
      "./app/layouts/*.js",
      "./app/*.js",
      "./app/**/*.js",
      "./components/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'vs-blue': {
          DEFAULT: '#051A5C',
          50: '#CED9FC',
          100: '#9DB3FA',
          200: '#6C8EF7',
          300: '#3B68F4',
          400: '#0D44EF',
          500: '#0A36BE',
          600: '#08288D',
          700: '#051A5C',
          800: '#041751',
          900: '#051A5C'
        },
        'vs-sky': {
          DEFAULT: '#00FFFF',
          50: '#DFFFFF',
          100: '#BFFFFF',
          200: '#9FFFFF',
          300: '#80FFFF',
          400: '#60FFFF',
          500: '#40FFFF',
          600: '#20FFFF',
          700: '#00FFFF',
          800: '#00DFDF',
          900: '#00BFBF'
        }
      }
    },
  },
  plugins: [],
}
