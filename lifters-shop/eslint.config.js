import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/strict-boolean-expressions': 'off',
      'object-curly-spacing': ['error', 'always'],
      indent: ['error', 2],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'max-len': ['error', { code: 120 }],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/semi': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      'no-extra-boolean-cast': 'off',
      'no-undef': 'error',
      '@typescript-eslint/no-unused-vars': ['error'],
      semi: ['error', 'always'],
      'no-var': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-multi-spaces': 'error',
      'no-nested-ternary': 'error',
      'no-trailing-spaces': 'error',
      'no-unneeded-ternary': 'error',
      quotes: ['error', 'single'],
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      '@typescript-eslint/no-explicit-any': 'error',
      'arrow-parens': ['error', 'as-needed'],
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'external',
            'builtin',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroupsExcludedImportTypes: ['builtin', 'external'],
          pathGroups: [
            {
              pattern: './**',
              group: 'parent',
              position: 'after',
            },
          ],
        },
      ],
      'react/jsx-no-leaked-render': 'error',
    },
  },
)
