const browserConfig = require('../browser');

module.exports = {
  ...browserConfig,
  plugins: [...browserConfig.plugins, 'react'],
  extends: [
    ...browserConfig.extends.slice(0, -1),
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
};
