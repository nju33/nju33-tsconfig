module.exports = {
  files: ['src/***/*.ts', 'src/**/*.tsx'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // recommended
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/ban-types': 2,
    camelcase: 'off',
    '@typescript-eslint/camelcase': 2,
    '@typescript-eslint/class-name-casing': 2,
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 2,
    indent: 'off',
    '@typescript-eslint/indent': 2,
    '@typescript-eslint/interface-name-prefix': 2,
    '@typescript-eslint/member-delimiter-style': 2,
    '@typescript-eslint/no-angle-bracket-type-assertion': 2,
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 2,
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-namespace': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/no-object-literal-type-assertion': 2,
    '@typescript-eslint/no-parameter-properties': 2,
    '@typescript-eslint/no-triple-slash-reference': 2,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/prefer-interface': 2,
    '@typescript-eslint/prefer-namespace-keyword': 2,
    '@typescript-eslint/type-annotation-spacing': 2,
    // overloads対策
    'no-dupe-class-members': 0,
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
  },
};
