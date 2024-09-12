import perfectionist from 'eslint-plugin-perfectionist'

export default {
  plugins: {
    perfectionist,
  },
  rules: {
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
    'perfectionist/sort-imports': 'off',
  },
}
