/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#648bff',
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#baddff',
          300: '#7dc1ff',
          400: '#3aa1ff',
          500: '#648bff',
          600: '#0063cc',
          700: '#0052a8',
          800: '#004085',
          900: '#003566',
        }
      }
    }
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
