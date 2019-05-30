const reactConfig = require('.');

test('react', () => {
  expect(reactConfig).toEqual({
    plugins: ['jest', 'react'],
    env: {
      browser: true,
      'jest/globals': true,
    },
    extends: [
      'xo-space/esnext',
      'plugin:jest/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'prettier/react',
    ],
  });
});
