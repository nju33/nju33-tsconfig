module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-length': [2, 'always', 80],
    'footer-max-length': [2, 'always', 80],

    // それぞれのプロジェクト毎に設定
    'scope-enum': [2, 'always', []],
    'scope-max-length': [2, 'always', 30],
    'scope-case': [2, 'always', 'kebab-case'],

    'subject-case': [2, 'always', 'lower-case'],
    'type-case': [2, 'always', 'kebab-case'],
    'type-enum': [2, 'always', ['feat', 'fix', 'revert', 'chore']],
  },
};
