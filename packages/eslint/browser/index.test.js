const browserConfig = require('.');

test('browser', () => {
  expect(browserConfig).toEqual({
    plugins: ['jest'],
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
      'plugin:prettier/recommended',
    ],
  });
});
