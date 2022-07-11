module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    utils: true,
    darkTheme: "night",
    themes: [
      "night", "bumblebee",
    ],
  },
}
