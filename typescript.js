module.exports = {
  extends: ['./index.js'],
  parser : '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@stylistic/ts'],
  rules  : {
    'no-use-before-define'              : 'warn',
    'no-shadow'                         : 'off',
    'no-unused-vars'                    : 'off',
    '@stylistic/type-annotation-spacing': ['off', {
      before: false,
      after : true,
    }],

    // '@typescript-eslint/no-use-before-define': 'error',
    // '@typescript-eslint/no-shadow': 'error',
    // '@typescript-eslint/no-unused-vars': 'error',
    // '@typescript-eslint/member-delimiter-style': 'error',
    // '@typescript-eslint/no-useless-empty-export': 'warn',
    // '@typescript-eslint/no-floating-promises': 'off',
    // '@typescript-eslint/no-explicit-any': 'error',
  },
}
