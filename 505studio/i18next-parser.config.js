module.exports = {
    locales: ['es', 'en'],
    output: 'locales/$LOCALE/common.json',
    input: [
      'components/**/*.{js,ts,jsx,tsx}',
      'pages/**/*.{js,ts,jsx,tsx}'
    ],
    defaultValue: '',
    useKeysAsDefaultValue: false,
    createOldCatalogs: false,
    lexers: {
      tsx: ['JavascriptLexer'],
      jsx: ['JavascriptLexer'],
      js: ['JavascriptLexer'],
      ts: ['JavascriptLexer']
    },
  }
  