module.exports = {
  extends: [
    'plugin:@stylistic/recommended-extends',
    'plugin:perfectionist/recommended-alphabetical',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['node_modules/*', 'build/*'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@stylistic',
    'modules-newlines',
    'perfectionist',
    'unicorn',
    'only-warn',
  ],
  rules: {
    '@stylistic/array-bracket-newline': ['off', 'consistent'],
    '@stylistic/array-element-newline': [
      'off',
      {
        minItems: 3,
        multiline: true,
      },
    ],

    '@stylistic/arrow-parens': ['off', 'always'],
    '@stylistic/key-spacing': [
      'warn',
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    '@stylistic/no-multi-spaces': [
      'warn',
      {
        exceptions: {
          Property: true,
          PropertyDefinition: true,
          TSPropertySignature: true,
          TSTypeAnnotation: true,
        },
      },
    ],
    '@stylistic/no-multiple-empty-lines': ['warn', { max: 1 }],
    '@stylistic/no-multiple-empty-lines': 'off',
    '@stylistic/object-curly-newline': [
      'off',
      {
        ExportDeclaration: {
          consistent: true,
          minProperties: 3,
          multiline: true,
        },
        ImportDeclaration: {
          consistent: true,
          minProperties: 3,
          multiline: true,
        },
        ObjectExpression: {
          consistent: true,
          multiline: true,
        },
        ObjectPattern: {
          consistent: true,
          multiline: true,
        },
      },
    ],
    '@stylistic/object-property-newline': [
      'off',
      { allowAllPropertiesOnSameLine: false },
    ],
    '@stylistic/operator-linebreak': 'off',
    '@stylistic/quotes': [
      'off',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'modules-newlines/export-declaration-newline': 'off',
    'modules-newlines/import-declaration-newline': 'off',

    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    'perfectionist/sort-classes': 'off',
    // 'perfectionist/sort-classes': [
    //   'error',
    //   {
    //     groups: [
    //       'index-signature',
    //       'private-property',
    //       'property',
    //       'constructor',
    //       ['get-method', 'set-method'],
    //       'static-method',
    //       'private-method',
    //       'method',
    //       'unknown',
    //       'static-private-method',
    //       'static-property',
    //     ],
    //     order: 'asc',
    //     type: 'natural',
    //   },
    // ],

    'perfectionist/sort-interfaces': [
      'warn',
      {
        order: 'asc',
        'partition-by-new-line': true,
        type: 'alphabetical',
      },
    ],

    'perfectionist/sort-objects': [
      'warn',
      {
        order: 'asc',
        'partition-by-new-line': true,
        type: 'alphabetical',
      },
    ],

    'perfectionist/sort-exports': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
      },
    ],
    'perfectionist/sort-imports': [
      'warn',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'index-type',
          'parent',
          'sibling',
          'index',
          'object',

          'styles',
          'side-effect-style',

          'external-type',
          'internal-type',
          'external-type',
          'parent-type',
          'sibling-type',
          'index-type',

          'unknown',
        ],
        'internal-pattern': ['src/**'],
        'newlines-between': 'always',
        order: 'asc',
        type: 'alphabetical',
      },
    ],
    'sort-exports': 'off',
    'sort-imports': 'off',

    'unicorn/import-style': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
    // 'unicorn/prevent-abbreviations': [
    //   'error',
    //   {
    //     allowList: {
    //       args: true,
    //       attr: true,
    //       attrs: true,
    //       props: true,
    //     },
    //     checkFilenames: true,
    //     checkProperties: true,
    //     checkVariables: true,
    //   },
    // ],

    '@stylistic/brace-style': 'off',
    '@stylistic/comma-dangle': 'off',
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/indent': 'off',
    '@stylistic/indent-binary-ops': 'off',
    '@stylistic/lines-between-class-members': ['error'],
    '@stylistic/member-delimiter-style': 'off',
    '@stylistic/quote-props': ['error', 'as-needed'],

    'prettier/prettier': [
      'warn',
      {
        // parser: 'flow',
        semi: false,
        singleQuote: true,
      },
    ],
  },
}
