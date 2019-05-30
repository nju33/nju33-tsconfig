const reactConfig = require('.');

test('vue', () => {
  expect(reactConfig).toEqual({
    plugins: ['jest', 'vue'],
    env: {
      browser: true,
      'jest/globals': true,
    },
    extends: [
      'xo-space/esnext',
      'plugin:jest/recommended',
      'plugin:vue/recommended',
      'plugin:prettier/recommended',
      'prettier/vue',
    ],
  });
});
