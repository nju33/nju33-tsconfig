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
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-dupe-class-members': 'off',
      },
    },
    // cSpell: disable-next-line
    // `constructor`のオーバーロード対策
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
      },
    },
  ],
};
