const reactTsConfig = require('./ts');
const tsRules = require('../_ts-rules');

test('react/ts', () => {
  expect(reactTsConfig).toEqual({
    parser: '@typescript-eslint/parser',
    plugins: ['jest', 'react', '@typescript-eslint'],
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
      'plugin:react/recommended',
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
