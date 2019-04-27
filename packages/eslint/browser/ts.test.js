const browserTsConfig = require('./ts');
const tsRules = require('../_ts-rules');

test('browser/ts', () => {
  expect(browserTsConfig).toEqual({
    parser: '@typescript-eslint/parser',
    plugins: ['jest', '@typescript-eslint'],
    env: {
      browser: true,
      node: true,
      'jest/globals': true,
    },
    extends: [
      'xo-space',
      'xo-space/esnext',
      'xo-space/browser',
      'plugin:jest/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'prettier/@typescript-eslint',
    ],
    rules: tsRules,
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          'no-dupe-class-members': 'off',
        },
      },
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          'no-useless-constructor': 'off',
          '@typescript-eslint/no-useless-constructor': 'error',
        },
      },
    ],
  });
});
