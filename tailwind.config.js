module.exports = {
  purge: [
    './public/index.html',
    './src/*.js',
    './src/**/*.js',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
      'TimesNewRoman': ['Times New Roman', 'Times', 'serif']
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
