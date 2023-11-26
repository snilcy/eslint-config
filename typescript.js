module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    './index.js',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    '@stylistic/ts',

    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:@stylistic/disable-legacy',
  ],
  rules: {
    '@stylistic/key-spacing': 'off',
    '@stylistic/type-annotation-spacing': [
      'warn',
      {
        after: true,
        before: false,
      },
    ],

    '@typescript-eslint/key-spacing': [
      'warn',
      {
        afterColon: true,
        beforeColon: false,
      },
    ],

    '@typescript-eslint/type-annotation-spacing': 'off',

    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'warn',

    // '@typescript-eslint/no-use-before-define': 'error',
    // '@typescript-eslint/no-shadow': 'error',
    // '@typescript-eslint/no-unused-vars': 'error',
    // '@typescript-eslint/member-delimiter-style': 'error',
    // '@typescript-eslint/no-useless-empty-export': 'warn',
    // '@typescript-eslint/no-floating-promises': 'off',
    // '@typescript-eslint/no-explicit-any': 'error',
  },
}
