module.exports = {
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  extends: [
    'xo-space/esnext',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
};
