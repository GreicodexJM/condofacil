module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  extends: ['plugin:vue/vue3-essential', '@vue/standard', '@vue/typescript/recommended'],
  globals: {
    defineProps: 'readonly',
    defineExpose: 'readonly',
    defineEmits: 'readonly',
  },
  rules: {
    // Write some rules you want to configure yourself
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Disable console in production environment
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Disable debugger in production environment
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': 'off',
    'space-before-function-paren': 'off',
    'vue/multi-word-component-names': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
