import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config';

export default defineConfig(
  tseslint.configs.strict,
  tseslint.configs.stylistic,
)

// export default tseslint.config({
//   files: ['**/*.{ts,tsx}'],
//   // files: ['**/*.ts'],
//   extends: [
//     eslint.configs.recommended,
//       ...tseslint.configs.strict,
//       ...tseslint.configs.stylistic,

//   // ...tseslint.configs.recommendedTypeChecked,
//   // ...tseslint.configs.stylisticTypeChecked,
//   //   ...tseslint.configs.recommended,
//   //   ...tseslint.configs.stylistic,
//   ],
//   // extends: [
//   //   'plugin:@typescript-eslint/recommended',
//   //   'plugin:@typescript-eslint/stylistic',
//   //   './index.js',
//   // ],
//   // parser: '@typescript-eslint/parser',

//         // "parser": "@typescript-eslint/parser"
//   // plugins: [
//   //   '@typescript-eslint',
//   //   '@stylistic/ts',
//   //   // 'plugin:@typescript-eslint/recommended',
//   //   // 'plugin:@stylistic/disable-legacy',
//   // ],

//   // rules: { },
// })
