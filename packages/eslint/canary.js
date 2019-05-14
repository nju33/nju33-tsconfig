module.exports = {
  extends: ['xo-space', 'xo-space/esnext'],
  overrides: [
    require('./overrides/react'),
    require('./overrides/jest'),
    require('./overrides/typescript'),
    require('./overrides/prettier-js'),
    require('./overrides/prettier-ts'),
  ],
};
