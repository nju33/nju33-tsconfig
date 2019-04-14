module.exports = {
  // `@param`に`{type}`や`@returns`の必須を無効に
  'valid-jsdoc': 0,
  // eslint の`no-unused-vars`では`interface`などが扱えないので
  // eslint 側のルールは無効化し、 ts-eslint のルールを使う
  'no-unused-vars': 0,
  '@typescript-eslint/no-unused-vars': 2,
  // prettier に任せる
  indent: 0,
  '@typescript-eslint/indent': 0,
};
