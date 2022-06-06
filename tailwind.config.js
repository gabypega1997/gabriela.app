module.exports = {
  content: ["pages/*.ts", "components/*.tsx","pages/*.tsx", "components/*.ts"],
  theme: {
    extend: {
      colors:{
        'navbar-gray': 'rgba(0, 0, 0, 0.55)',
        'button-purple': '#FF00FF99'

      },
      backgroundImage:{
        "home-background": "url('/img/Background.png')"
      },
      fontFamily: {
        fancy: ['Dancing Script', 'sans-serif']
      }
    },
  },
  plugins: [],
}
