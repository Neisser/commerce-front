module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: {
          'primary': 'var(--bg-background-primary)',
          'second': 'var(--bg-background-second)',
          'ternary': 'var(--bg-background-ternary)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
