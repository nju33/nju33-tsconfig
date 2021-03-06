const tsConfig = require('../ts');

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'jest', 'react'],
  extends: [
    'xo-space/esnext',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: tsConfig.rules,
};
