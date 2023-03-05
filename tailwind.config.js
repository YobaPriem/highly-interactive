/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    './assets/styles/**/*.{css,scss}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'Arial', 'sans-serif']
      },
      colors: {
        'light-blue': '#0107FB',
        'copy': '#222222',
        'shortcut-outline-focused': '#FF7F7F',
        'shortcut-selected-blue': '#000A71',
        'base-gray-1':  '#DFDFDF',
        'base-gray-2': '#C0C0C0',
        'base-gray-3': '#B8C0C1',
        'base-gray-4': '#808080',
        'classic-teal': '#008080'
      },
      backgroundImage: {
        'gradient-bar': 'linear-gradient(90deg, #808080 0%, #B5B5B5 100%)',
        'gradient-bar-blue': 'linear-gradient(90deg, #000080 0%, #1084D0 100%)',
      },
    },
    fontSize: {
      'title-bar': [
        '11px', '12px'
      ]
    },
    boxShadow: {
      'base': 'inset -1px -1px #0a0a0a,inset 1px 1px #dfdfdf,inset -2px -2px grey,inset 2px 2px #fff',
      'base-active': 'inset -1px -1px #fff,inset 1px 1px #0a0a0a,inset -2px -2px #dfdfdf,inset 2px 2px grey'
    }
  },
  plugins: [],
}
