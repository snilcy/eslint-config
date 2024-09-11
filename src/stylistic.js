import stylisticPlugin from '@stylistic/eslint-plugin'

export default {
  plugins: {
    '@stylistic': stylisticPlugin,
  },

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
    // '@stylistic/no-multiple-empty-lines': 'off',

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

    '@stylistic/brace-style': 'off',
    '@stylistic/comma-dangle': 'off',
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/indent': 'off',
    '@stylistic/indent-binary-ops': 'off',
    '@stylistic/lines-between-class-members': ['error'],
    '@stylistic/member-delimiter-style': 'off',
    '@stylistic/quote-props': ['error', 'as-needed'],
  },
}
