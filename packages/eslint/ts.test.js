test('ts', () => {
  expect(require('./ts')).toEqual({
    parser: '@typescript-eslint/parser',
    env: {
      'jest/globals': true,
    },
    plugins: ['@typescript-eslint', 'jest'],
    extends: [
      'xo-space',
      'xo-space/esnext',
      'plugin:jest/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'prettier/@typescript-eslint',
    ],
    rules: {
      'valid-jsdoc': 0,
      'capitalized-comments': 0,
      'no-undef': 0,
      'no-unused-vars': 0,
      '@typescript-eslint/no-unused-vars': 2,
      indent: 0,
      '@typescript-eslint/indent': 0,
      'no-dupe-class-members': 'off',
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        0,
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: false,
        },
      ],
    },
  });
});
