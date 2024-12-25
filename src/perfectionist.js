import perfectionist from 'eslint-plugin-perfectionist'

export default {
  plugins: {
    perfectionist,
  },
  rules: {
    ...perfectionist.configs['recommended-natural'].rules,
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
        partitionByNewLine: true,
        type: 'alphabetical',
      },
    ],

    'perfectionist/sort-objects': [
      'warn',
      {
        order: 'asc',
        partitionByNewLine: true,
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
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          [
            'builtin-type',
            'external-type',
            'internal-type',
            'parent-type',
            'sibling-type',
            'index-type',
            'type',
          ],
          'unknown',
        ],
        internalPattern: ['^~/.*'],
        newlinesBetween: 'always',
        order: 'asc',
        type: 'alphabetical',
      },
    ],
  },
}
