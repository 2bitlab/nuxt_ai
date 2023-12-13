// https://eslint.org/docs/latest/use/configure/

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 'comma-dangle': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'no-template-curly-in-string': 'off',
    'require-await': 'off',
    'n/no-callback-literal': 'off',
    'vue/no-multiple-template-root': 'off',
  },
}

module.exports = config
