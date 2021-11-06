module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora', serif"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor:['active'],
    },
  },
  plugins: [],
}
