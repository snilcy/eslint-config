import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

export default [
  {
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/import-style': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-for-loop': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prevent-abbreviations': 'off',
      // 'unicorn/better-regex': 'error',
      // 'unicorn/…': 'error',
    },
  },
  // …
]
