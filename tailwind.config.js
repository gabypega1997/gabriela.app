module.exports = {
  content: ["pages/*.ts", "components/*.tsx"],
  theme: {
    extend: {
      colors:{
        'navbar-gray': 'rgba(0, 0, 0, 0.67)'
      },
      backgroundImage:{
        "home-background": "url('/public/img/Background.png')"
      }
    },
  },
  plugins: [],
}
