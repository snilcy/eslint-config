import 'eslint-plugin-only-warn'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

import modulesNewlines from './src/modules-newlines.js'
import perfectionist from './src/perfectionist.js'
import prettier from './src/prettier.js'
import rules from './src/rules.js'
import stylistic from './src/stylistic.js'
import typescript from './src/typescript/index.js'
import typescriptRules from './src/typescript/rules.js'

export default [
  stylistic,
  prettierRecommended,
  prettier,
  perfectionist,
  modulesNewlines,
  ...typescript,
  rules,
  typescriptRules,
]
