module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'fsd-for-test',
        'unused-imports',
    ],
    rules: {
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { varsIgnorePattern: '__IS_DEV__' },
        ],
        'unused-imports/no-unused-imports': 'error',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'react/function-component-definition': 'off',
        'react/no-unused-prop-types': 'warn',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-undef': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'justify',
                    'target',
                    'to',
                    'alt',
                    'as',
                    'name',
                    'position',
                    'align',
                    'gap',
                    'data-testid',
                    'direction',
                    'title',
                    'feature',
                ],
            },
        ],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'fsd-for-test/path-checker': ['error', { alias: '@' }],
        'fsd-for-test/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.story.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'fsd-for-test/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: [
                    '**/storeProvider/**',
                    '**/testing',
                    '**/theme',
                ],
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.ts', '**/src/**/*.test.tsx'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
        {
            files: ['**/templates/**/**'],
            rules: {
                'fsd-for-test/path-checker': 'off',
            },
        },
    ],
};
