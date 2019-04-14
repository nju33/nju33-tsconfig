module.exports = {
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
};
