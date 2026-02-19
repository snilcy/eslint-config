import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import globalsModule from 'globals'

import { defineConfig } from 'eslint/config'
const { browser, es2021, node } = globalsModule
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
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...browser,
        ...node,
        ...es2021,
        // Astro globals
        Astro: 'readonly',
        Fragment: 'readonly',
      },
      parser: astroParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.astro'],
        parser: tsParser,
        project: './tsconfig.json',
        sourceType: 'module',
      },
      sourceType: 'module',
    },
    // ...eslint.configs.recommended,
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      // Import rules
      // 'import/no-unresolved': 'off',
      // 'import/extensions': 'off',
      // Astro specific rules
      'prettier/prettier': [
        'error',
        {
          parser: 'astro',
          plugins: ['prettier-plugin-astro'],
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
