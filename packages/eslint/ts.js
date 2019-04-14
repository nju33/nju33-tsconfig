const base = require('.');
const tsRules = require('./_ts-rules');

module.exports = {
  ...base,
  parser: '@typescript-eslint/parser',
  plugins: [...base.plugins, '@typescript-eslint'],
  extends: [
    'xo-space',
    'xo-space/esnext',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    ...tsRules,
  },
};
