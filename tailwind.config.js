module.exports = {
  content: ["pages/*.ts", "components/*.tsx","pages/*.tsx", "components/*.ts"],
  theme: {
    extend: {
      colors:{
        'navbar-gray': 'rgba(0, 0, 0, 0.55)'
      },
      backgroundImage:{
        "home-background": "url('/img/Background.png')"
      }
    },
  },
  plugins: [],
}
