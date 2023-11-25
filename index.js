module.exports = {
  extends: ['prettier'],
  plugins: ['@stylistic', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        indent: 2,
      },
    ],
    // '@stylistic/indent': ['error', 2],
    // '@stylistic/quotes': ['error', 'single'],
  },
};
