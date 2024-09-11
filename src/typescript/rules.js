export default {
  files: ['**/*.{ts,tsx}'],
  rules: {
    '@stylistic/type-annotation-spacing': [
      'warn',
      {
        after: true,
        before: false,
        overrides: {
          arrow: {
            after: true,
            before: true,
          },
        },
      },
    ],

    // '@typescript-eslint/ban-types': [
    //   'error',
    //   {
    //     types: {
    //       '{}': false,
    //     },
    //   },
    // ],

    '@stylistic/key-spacing': [
      'warn',
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    // '@typescript-eslint/key-spacing': [
    //   'warn',
    //   {
    //     afterColon: true,
    //     beforeColon: false,
    //   },
    // ],

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
        // custom: {
        //   match: false,
        //   regex: '^$',
        // },
        filter: {
          match: false,
          regex: '^(Window|I[a-zA-Z]+DTO)$',
        },
        format: ['StrictPascalCase'],
        prefix: ['I'],
        selector: ['interface', 'typeAlias'],
      },
      {
        format: ['camelCase', 'UPPER_CASE'],
        selector: 'variable',
      },
      {
        format: ['UPPER_CASE', 'camelCase', 'StrictPascalCase'],
        modifiers: ['const'],
        selector: 'variable',
      },
      {
        format: ['camelCase', 'PascalCase'],
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
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        modifiers: ['private'],
        selector: 'memberLike',
      },
      {
        format: ['UPPER_CASE', 'camelCase', 'StrictPascalCase'],
        selector: 'objectLiteralProperty',
      },
      // {
      //   filter: {
      //     match: true,
      //     regex: 'ENV$',
      //   },
      //   format: ['UPPER_CASE'],
      //   selector: ['property', 'typeLike'],
      // },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',

    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'warn',

    // 'prettier/prettier': [
    //   'warn',
    //   {
    //     parser: 'typescript',
    //     semi: false,
    //     singleQuote: true,
    //   },
    // ],
    // '@typescript-eslint/no-use-before-define': 'error',
    // '@typescript-eslint/no-shadow': 'error',
    // '@typescript-eslint/no-unused-vars': 'error',
    // '@typescript-eslint/member-delimiter-style': 'error',
    // '@typescript-eslint/no-useless-empty-export': 'warn',
    // '@typescript-eslint/no-floating-promises': 'off',
    // '@typescript-eslint/no-explicit-any': 'error',
  },
}
