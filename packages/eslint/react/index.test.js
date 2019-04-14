const reactConfig = require('.');

test('react', () => {
  expect(reactConfig).toEqual({
    plugins: ['jest', 'react'],
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
      'plugin:prettier/recommended',
    ],
  });
});
