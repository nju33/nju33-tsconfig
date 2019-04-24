const tsConfig = require('./ts');
const tsRules = require('./_ts-rules');

test('ts', () => {
  expect(tsConfig).toEqual({
    parser: '@typescript-eslint/parser',
    plugins: ['jest', '@typescript-eslint'],
    env: {
      node: true,
      'jest/globals': true,
    },
    extends: [
      'xo-space',
      'xo-space/esnext',
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
    ],
  });
});
