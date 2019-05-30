module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'xo-space',
    'xo-space/esnext',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    // `@param`に`{type}`や`@returns`の必須を無効に
    'valid-jsdoc': 0,
    // コードをコメントアウトした時に、
    // 先頭の文字が大文字化してしまうので無効に
    'capitalized-comments': 0,
    // In .ts, an error at the time of `typeof` use
    // tsファイルで、`typeof`を使うと定義されていないと言われるので無効化
    'no-undef': 0,
    // eslint の`no-unused-vars`では`interface`などが扱えないので
    // eslint 側のルールは無効化し、 ts-eslint のルールを使う
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
    // prettier に任せる
    indent: 0,
    '@typescript-eslint/indent': 0,
    // メソッド名や`constructor`などに対して`public`は付けなくていいように
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    // ---
    // 何故か駄目
    // https://gyazo.com/412f625ca72fcd2220c73ab9bc0a9114
    // '@typescript-eslint/explicit-member-accessibility': [
    //   2,
    //   [{accessibility: 'no-public'}],
    // ],
    'no-dupe-class-members': 'off',
    // `constructor`のオーバーロード対策
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    // `const fn: Fn = ...`のように型を渡してから定義するものに関しては、
    // 式毎に型定義をしなくてもセーフ
    '@typescript-eslint/explicit-function-return-type': [
      0,
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: false,
      },
    ],
  },
};
