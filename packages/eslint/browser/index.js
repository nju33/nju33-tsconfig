const baseConfig = require('..');

module.exports = {
  ...baseConfig,
  env: {
    ...baseConfig.env,
    browser: true,
  },
  extends: [
    ...baseConfig.extends.slice(0, -2),
    'xo-space/browser',
    baseConfig.extends[baseConfig.extends.length - 2],
    'plugin:prettier/recommended',
  ],
};
