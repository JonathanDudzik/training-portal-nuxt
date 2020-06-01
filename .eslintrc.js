module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "object-shorthand": "off",
    "space-before-function-paren": "off",
    "object-curly-spacing": "off",
    "no-var": "warn",
    "no-trailing-spaces": "warn",
    "indent": "warn",
    "eqeqeq": "warn",
    "keyword-spacing": "warn",
    "quotes": "warn"
  }
}
