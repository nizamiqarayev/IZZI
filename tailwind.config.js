module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'signInAndUpBg': "url('assets/images/signInAndUpImages/signInAndUpbg.png')",
        'main':"url('assets/images/logo/head bg.svg')"
      },
      fontFamily: {
        quicksand:'Quicksand',
        password:'Password Dots',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
