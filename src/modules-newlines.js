import modulesNewlines from 'eslint-plugin-modules-newlines'

export default {
  plugins: {
    '@spence1115/modules-newlines': modulesNewlines,
  },
  rules: {
    'modules-newlines/export-declaration-newline': 'off',
    'modules-newlines/import-declaration-newline': 'off',
  },
}
