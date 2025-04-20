module.exports = {
    locales: ['es', 'en'],
    input: ['src/components/**/*.{js,jsx,ts,tsx}', 'src/pages/**/*.{js,jsx,ts,tsx}'],
    output: 'locales/$LOCALE/common.json',
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
  