const browserConfig = require('.');

test('.', () => {
  expect(browserConfig).toEqual({
    plugins: ['jest'],
    env: {
      node: true,
      'jest/globals': true,
    },
    extends: [
      'xo-space',
      'xo-space/esnext',
      'plugin:jest/recommended',
      'plugin:prettier/recommended',
    ],
  });
});
