/* eslint-disable no-undef */
module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        '@typescript-eslint',
    ],
    'rules': {
        'comma-dangle': ['warn', 'always-multiline'],
        'indent': ['warn', 4],
        'react/react-in-jsx-scope': 'off',
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'always'],
        'object-curly-spacing': ['warn', 'never'],
        'array-bracket-spacing': ['warn', 'never'],
    },
    'settings': {
        'react': {
            'version': 'detect',
        },
    },
};
