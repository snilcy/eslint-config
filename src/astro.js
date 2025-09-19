import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import globalsModule from 'globals'
const { browser, node, es2021 } = globalsModule
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import astroParser from 'astro-eslint-parser'
import eslintPluginAstro from 'eslint-plugin-astro'

import { prettierParams } from './prettier.js'

/** @type {Array<import('eslint').Linter.FlatConfig>} */
export default defineConfig([
  eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    // ...eslint.configs.recommended,
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...browser,
        ...node,
        ...es2021,
        // Astro globals
        Astro: 'readonly',
        Fragment: 'readonly',
      },
    },
    rules: {
      // Import rules
      // 'import/no-unresolved': 'off',
      // 'import/extensions': 'off',
      // Astro specific rules
      'prettier/prettier': [
        'error',
        {
          plugins: ['prettier-plugin-astro'],
          parser: 'astro',
          ...prettierParams,
          // singleQuote: true,
          // tabWidth: 2,
          // useTabs: false,
          astroAllowShorthand: true,
        },
      ],
      // Allow any JSX-like expressions in Astro templates
      // 'react/jsx-key': 'off',
      // 'react/jsx-uses-react': 'off',
      // 'react/react-in-jsx-scope': 'off',
      // TypeScript rules for script blocks
      // ...typescriptPlugin.configs['recommended'].rules,
    },
  },
])
