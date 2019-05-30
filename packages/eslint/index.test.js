const browserConfig = require('.');

test('.', () => {
  expect(browserConfig).toEqual({
    plugins: ['jest'],
    env: {
      'jest/globals': true,
    },
    extends: [
      'xo-space/esnext',
      'plugin:jest/recommended',
      'plugin:prettier/recommended',
    ],
  });
});
