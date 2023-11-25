module.exports = {
  ignorePatterns: ['node_modules/*', 'build/*'],
  extends       : [
    'plugin:@stylistic/recommended-extends',
    // 'prettier'
  ],
  plugins: [
    '@stylistic',
    'modules-newlines',
    // 'prettier',
  ],
  parserOptions: {
    sourceType : 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    '@stylistic/operator-linebreak': 'off',
    '@stylistic/arrow-parens'      : ['error', 'always'],
    '@stylistic/quotes'            : [
      'error',
      'single',
      {
        avoidEscape          : true,
        allowTemplateLiterals: true,
      },
    ],
    '@stylistic/no-multi-spaces': 'off',
    '@stylistic/key-spacing'    : [
      'error',
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
    '@stylistic/object-curly-newline': ['error', {
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
    }],
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],

    'modules-newlines/import-declaration-newline': 'error',
    'modules-newlines/export-declaration-newline': 'error',

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
