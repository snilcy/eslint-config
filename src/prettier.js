import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default {
  plugins: {
    ...prettierRecommended.plugins
  },
  rules: {
    ...prettierRecommended.rules,

    "prettier/prettier": [
      "warn",
      {
        semi: false,
        singleQuote: true,
      },
    ],
  }
};
