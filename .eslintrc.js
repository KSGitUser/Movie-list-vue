module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ['@typescript-eslint', 'vue'],
  extends: ['plugin:@typescript-eslint/recommended'],
  /* extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/recommended'
  ], */
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
