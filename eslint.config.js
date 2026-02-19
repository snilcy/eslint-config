import { defineConfig, globalIgnores } from 'eslint/config'

import astro from './src/astro.js'
import hooks from './src/hooks.js'
import modulesNewlines from './src/modules-newlines.js'
import perfectionistConfig from './src/perfectionist.js'
import prettier from './src/prettier.js'
import rules from './src/rules.js'
import stylistic from './src/stylistic.js'
import typescript from './src/typescript/index.js'
import typescriptRules from './src/typescript/rules.js'
import vite from './src/vite.js'

import 'eslint-plugin-only-warn'

export default defineConfig(
  globalIgnores(['**/dist/', '**/build/', '*.gen.ts']),
  stylistic,
  typescript,
  prettier,
  // astro,
  perfectionistConfig,
  modulesNewlines,
  rules,
  typescriptRules,
  hooks,
  vite,
)
