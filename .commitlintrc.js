module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'docs', //  Just modified the documentation etc.
        'feat', // A Add feature
        'fix', // fix bugs
        'style', // Only modify the ui style, etc., without changing the code logic
        'perf', // Optimization related, such as improving performance, experience
        'refactor', // Code refactoring, no new features or bug fixes
        'revert', // rollback to previous version
        'test', // Test cases, including unit tests, integration tests, etc.
        'build', // Construct
        'ci', // Updates to ci configuration, script files, etc.
        'chore', // Change the build process, or add dependent libraries, tools, etc.
      ],
    ],
  },
}
