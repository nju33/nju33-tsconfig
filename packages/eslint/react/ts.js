const config = require('.');
const tsRules = require('../_ts-rules');

module.exports = {
  ...config,
  parser: '@typescript-eslint/parser',
  plugins: [...config.plugins, '@typescript-eslint'],
  extends: [
    ...config.extends.slice(0, -1),
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    ...tsRules,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-dupe-class-members': 'off',
      },
    },
  ],
};
