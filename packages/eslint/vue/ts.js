const tsConfig = require('../ts');

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'jest', 'vue'],
  extends: [
    'xo-space/esnext',
    'plugin:jest/recommended',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],
  rules: tsConfig.rules,
};
