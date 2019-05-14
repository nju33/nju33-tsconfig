/**
 * prettier/eslint-config-prettier
 * https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
 */
module.exports = {
  files: ['src/**/*.ts', 'src/**/*.tsx'],
  rules: {
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-extra-parens': 0,
    '@typescript-eslint/type-annotation-spacing': 0,
  },
};
