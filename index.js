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
      {
        minItems: 2,
        multiline: true,
      },
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

    'perfectionist/sort-interfaces': [
      'warn',
      {
        'order': 'asc',
        'partition-by-new-line': true,
        'type': 'natural',
      },
    ],

    'perfectionist/sort-objects': [
      'warn',
      {
        order: 'asc',
        type: 'natural',
      },
    ],

    'unicorn/no-array-reduce': 'off',
  },
}
