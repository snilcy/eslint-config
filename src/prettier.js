import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default {
  plugins: {
    ...prettierRecommended.plugins,
  },
  rules: {
    ...prettierRecommended.rules,

    'prettier/prettier': [
      'warn',
      {
        overrides: [
          {
            files: '*.astro',
            options: {
              parser: 'astro',
            },
          },
        ],
        plugins: [
          'prettier-plugin-astro',
          'prettier-plugin-tailwindcss', // needs to be last
        ],
        semi: false,
        singleQuote: true,
      },
    ],
  },
}
