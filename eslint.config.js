import { FlatCompat } from '@eslint/eslintrc';
import { defineFlatConfig } from 'eslint-define-config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

export default defineFlatConfig([
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'bin/**',
      'build/**',
      'coverage/**',
      'docs/**',
      'eslint.config.js',
      '.prettierrc.js',
      '.commitlintrc.cjs',
      'vite.config.ts',
    ],
  },
  ...compat.extends(
    'canonical',
    'canonical/module',
    'canonical/regexp',
    'canonical/typescript',
    'canonical/typescript-type-checking',
    'canonical/prettier',
  ),
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // Rules needed by nodecfdi
  {
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false,
          },
        },
      ],

      'unicorn/filename-case': [
        'error',
        {
          case: 'snakeCase',
        },
      ],
      'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],

      'prettier/prettier': [
        'error',
        {
          arrowParens: 'always',
          bracketSameLine: false,
          bracketSpacing: true,
          endOfLine: 'lf',
          printWidth: 100,
          proseWrap: 'preserve',
          quoteProps: 'consistent',
          semi: true,
          singleAttributePerLine: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          useTabs: false,
        },
        {
          usePrettierrc: true,
        },
      ],
    },
  },
]);
