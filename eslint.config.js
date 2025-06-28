import 'eslint-plugin-only-warn'

import hooks from './src/hooks.js'
import modulesNewlines from './src/modules-newlines.js'
import perfectionistConfig from './src/perfectionist.js'
import prettier from './src/prettier.js'
import rules from './src/rules.js'
import stylistic from './src/stylistic.js'
import typescript from './src/typescript/index.js'
import typescriptRules from './src/typescript/rules.js'

export default [
  stylistic,
  prettier,
  perfectionistConfig,
  modulesNewlines,
  ...typescript,
  rules,
  typescriptRules,
  hooks,
]
