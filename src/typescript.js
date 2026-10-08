import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

import { defineConfig } from 'eslint/config'

export default defineConfig({
  // files: ['**/*.ts'],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
  ],
  files: ['**/*.{ts,tsx}'],
  // extends: [
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:@typescript-eslint/stylistic',
  //   './index.js',
  // ],
  // parser: '@typescript-eslint/parser',
  // plugins: [
  //   '@typescript-eslint',
  //   '@stylistic/ts',
  //   // 'plugin:@typescript-eslint/recommended',
  //   // 'plugin:@stylistic/disable-legacy',
  // ],

  rules: {},
})
