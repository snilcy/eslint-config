module.exports = {
  extends: [
    'plugin:@stylistic/recommended-extends',
    'plugin:perfectionist/recommended-alphabetical',
    'plugin:unicorn/recommended',
  ],
  ignorePatterns: [
    'node_modules/*',
    'build/*',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@stylistic',
    'modules-newlines',
    'perfectionist',
    'unicorn',
  ],
  rules: {
    '@stylistic/array-bracket-newline': [
      'warn',
      'consistent',
    ],

    '@stylistic/array-element-newline': [
      'warn',
      {
        minItems: 2,
        multiline: true,
      },
    ],

    '@stylistic/arrow-parens': [
      'warn',
      'always',
    ],
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
    '@stylistic/no-multiple-empty-lines': [
      'warn',
      { max: 1 },
    ],
    '@stylistic/object-curly-newline': [
      'warn',
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
      'warn',
      { allowAllPropertiesOnSameLine: false },
    ],
    '@stylistic/operator-linebreak': 'off',
    '@stylistic/quotes': [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'modules-newlines/export-declaration-newline': 'warn',
    'modules-newlines/import-declaration-newline': 'warn',

    'no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_' },
    ],

    'perfectionist/sort-classes': [
      'error',
      {
        groups: [
          'index-signature',
          'static-property',
          'private-property',
          'property',
          'constructor',
          [
            'get-method',
            'set-method',
          ],
          'static-method',
          'private-method',
          'static-private-method',
          'method',
          'unknown',
        ],
        order: 'asc',
        type: 'alphabetical',
      },
    ],

    'perfectionist/sort-interfaces': [
      'warn',
      {
        'order': 'asc',
        'partition-by-new-line': true,
        'type': 'alphabetical',
      },
    ],

    'perfectionist/sort-objects': [
      'warn',
      {
        'order': 'asc',
        'partition-by-new-line': true,
        'type': 'alphabetical',
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

        'groups': [
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
        'internal-pattern': [
          'src/**',
        ],
        'newlines-between': 'always',
        'order': 'asc',
        'type': 'alphabetical',

      },
    ],
    'sort-exports': 'off',
    'sort-imports': 'off',

    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': ['error',
      {
        allowList: {
          args: true,
          props: true,
        },
        checkFilenames: true,
        checkProperties: true,
        checkVariables: true,
      }],

    '@stylistic/lines-between-class-members': ['error'],
  },
}
