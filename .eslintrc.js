module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    'react/forbid-prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
}
