module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    rules: {
        'no-mixed-spaces-and-tabs': 0,
        'no-unused-vars': 0,
        'no-useless-escape': 0,
        'no-undef': 0,
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
};
