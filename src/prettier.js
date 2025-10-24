import prettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig, globalIgnores } from 'eslint/config'

export const prettierParams = {
  semi: false,
  singleQuote: true,
}

export default defineConfig([
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': [
        'warn',
        prettierParams,
        {
          usePrettierrc: false,
        },
      ],
    },
  },
])

// {
//   plugins: {
//     ...prettierRecommended.plugins,
//   },
//   rules: {
//     ...prettierRecommended.rules,

//     'prettier/prettier': [
//       'warn',
//       {
//         overrides: [
//           {
//             files: '*.astro',
//             options: {
//               parser: 'astro',
//             },
//           },
//         ],
//         plugins: [
//           // 'prettier-plugin-astro',
//           // 'prettier-plugin-tailwindcss', // needs to be last
//         ],
//         semi: false,
//         singleQuote: true,
//       },
//     ],
//   },
// }
