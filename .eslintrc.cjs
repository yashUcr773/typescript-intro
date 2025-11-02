/**
 * 🌍 Universal ESLint config for Angular, React, Next.js, Vue, Nuxt, Node.js, Docker, YAML, Markdown
 * Auto-runs on save via VS Code ESLint + Prettier extensions
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@angular-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:markdown/recommended',
    'plugin:yml/standard',
    'plugin:yml/prettier',
    'plugin:docker/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'vue',
    '@angular-eslint',
    'import',
    'promise',
    'security',
    'unused-imports',
    'markdown',
    'yml',
    'docker',
    'prettier'
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  overrides: [
    {
      files: ['*.md'],
      processor: 'markdown/markdown',
    },
  ],
  rules: {
    'prettier/prettier': 'error',

    // --- Cleanup ---
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ],

    // --- Readability / Consistency ---
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-trailing-spaces': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'import/no-duplicates': 'error',

    // --- Framework tweaks ---
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@angular-eslint/component-class-suffix': 'off',
    '@angular-eslint/directive-class-suffix': 'off',

    // --- General hygiene ---
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
  },
};
