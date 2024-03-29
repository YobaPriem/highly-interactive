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
      'title': [
        '11px', '12px'
      ],
      'task-bar': [
        '11px', '16px'
      ]
    },
    boxShadow: {
      'base': 'inset -1px -1px #0a0a0a,inset 1px 1px #dfdfdf,inset -2px -2px grey,inset 2px 2px #fff',
      'base-active': 'inset -1px -1px #fff,inset 1px 1px #0a0a0a,inset -2px -2px #dfdfdf,inset 2px 2px grey',
      'base-status': 'inset -1px -1px 0px #DFDFDF, inset 1px 1px 0px #808080',
      'base-checkbox': 'inset -1px -1px 0px #FFFFFF, inset 1px 1px 0px #808080, inset -2px -2px 0px #DFDFDF, inset 2px 2px 0px #0A0A0A',
      'base-slider-track': '0px 1px 0px #FFFFFF, inset 1px 1px 0px #B8B8B8, inset -1px -1px 0px #757575, inset 0px 1px 0px #9F9F9F',
      'base-slider-handle-horizontal': 'inset -1px -1px 0px #000000, inset -1px -1px 0px #7B7D83, inset 1px -1px 0px #FFFFFF, inset 0px 1px 0px #FFFFFF',
      'base-slider-handle-vertical': 'inset -1px -1px 0px #0A0A0A, inset 1px 1px 0px #FFFFFF, inset -2px -2px 0px #808080'
    }
  },
  plugins: [],
}