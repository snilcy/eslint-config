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
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase'],
        selector: 'default',
      },
      {
        format: ['UPPER_CASE'],
        selector: 'enumMember',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'parameter',
      },
      // {
      //   format: ['camelCase'],
      //   leadingUnderscore: 'require',
      //   modifiers: ['private'],
      //   selector: 'memberLike',
      // },
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
      {
        format: ['StrictPascalCase'],
        prefix: ['I'],
        selector: [
          'interface',
          'typeAlias',
        ],
      },
      {
        format: [
          'camelCase',
          'UPPER_CASE',
        ],
        selector: 'variable',
      },
      {
        format: [
          'UPPER_CASE',
          'camelCase',
          'StrictPascalCase',
        ],
        modifiers: ['const'],
        selector: 'variable',
      },
      {
        format: [
          'camelCase',
          'PascalCase',
        ],
        selector: 'import',
      },
      {
        format: null,
        modifiers: ['requiresQuotes'],
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
      },
      {
        format: [
          'UPPER_CASE',
          'camelCase',
          'StrictPascalCase',
        ],
        selector: 'objectLiteralProperty',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
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
