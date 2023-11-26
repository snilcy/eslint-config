module.exports = {
  ignorePatterns: ['node_modules/*', 'build/*'],
  extends       : ['plugin:@stylistic/recommended-extends'],
  plugins       : ['@stylistic', 'modules-newlines'],
  parserOptions : {
    sourceType : 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    '@stylistic/operator-linebreak': 'off',
    '@stylistic/arrow-parens'      : ['warn', 'always'],
    '@stylistic/quotes'            : [
      'warn',
      'single',
      {
        avoidEscape          : true,
        allowTemplateLiterals: true,
      },
    ],
    '@stylistic/no-multi-spaces'        : 'off',
    '@stylistic/no-multiple-empty-lines': ['warn', { max: 1 }],
    '@stylistic/key-spacing'            : [
      'warn',
      {
        multiLine: {
          beforeColon: false,
          afterColon : true,

        },
        align: {
          beforeColon: false,
          afterColon : true,
          on         : 'colon',
        },
      },
    ],
    '@stylistic/array-element-newline': [
      'warn',
      {
        minItems : 3,
        multiline: true,
      },
    ],
    '@stylistic/array-bracket-newline': [
      'warn',
      {
        minItems : 3,
        multiline: true,
      },
    ],
    '@stylistic/object-curly-newline': [
      'warn',
      {
        ObjectExpression : { multiline: true },
        ObjectPattern    : { multiline: true },
        ImportDeclaration: {
          multiline    : true,
          minProperties: 3,
        },
        ExportDeclaration: {
          multiline    : true,
          minProperties: 3,
        },
      },
    ],
    '@stylistic/object-property-newline': ['warn', { allowAllPropertiesOnSameLine: false }],

    'modules-newlines/import-declaration-newline': 'warn',
    'modules-newlines/export-declaration-newline': 'warn',

    // 'prettier/prettier': [
    //   'error',
    //   {
    //     singleQuote: true,
    //     indent: 2,
    //     semi: false,
    //     arrowParens: 'always',
    //     singleAttributePerLine: true,
    //     bracketSameLine: true,
    //   },
    // ],
  },
}
