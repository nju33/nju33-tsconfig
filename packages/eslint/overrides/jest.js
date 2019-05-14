module.exports = {
  files: [
    'src/**/*.test.js',
    'src/**/*.test.jsx',
    'src/**/*.test.ts',
    'src/**/*.test.tsx',
  ],
  plugins: ['jest'],
  env: {
    jest: true,
  },
  rules: {
    'jest/no-alias-methods': 1,
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'jest/no-jest-import': 2,
    'jest/no-jasmine-globals': 1,
    'jest/no-test-prefixes': 2,
    'jest/valid-describe': 2,
    'jest/valid-expect': 2,
    'jest/valid-expect-in-promise': 2,
  },
};
