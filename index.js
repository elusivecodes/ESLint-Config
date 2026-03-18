import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

const rules = {
    '@stylistic/array-bracket-newline': 'off',
    '@stylistic/array-bracket-spacing': [
        'error',
        'never',
    ],
    '@stylistic/array-element-newline': 'off',
    '@stylistic/arrow-parens': [
        'error',
        'always',
    ],
    '@stylistic/block-spacing': [
        'error',
        'never',
    ],
    '@stylistic/brace-style': 'error',
    '@stylistic/comma-dangle': [
        'error',
        'always-multiline',
    ],
    '@stylistic/comma-spacing': 'error',
    '@stylistic/comma-style': 'error',
    '@stylistic/computed-property-spacing': 'error',
    '@stylistic/eol-last': 'error',
    '@stylistic/function-call-spacing': 'error',
    '@stylistic/indent': [
        'error',
        4,
        {
            MemberExpression: 'off',
            SwitchCase: 1,
        },
    ],
    '@stylistic/key-spacing': 'error',
    '@stylistic/keyword-spacing': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': [
        'error',
        {
            max: 2,
        },
    ],
    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/object-curly-spacing': [
        'error',
        'always',
    ],
    '@stylistic/operator-linebreak': [
        'error',
        'after',
    ],
    '@stylistic/padded-blocks': [
        'error',
        'never',
    ],
    '@stylistic/quote-props': [
        'error',
        'consistent',
    ],
    '@stylistic/quotes': [
        'error',
        'single',
        {
            allowTemplateLiterals: 'always',
        },
    ],
    '@stylistic/rest-spread-spacing': 'error',
    '@stylistic/semi': 'error',
    '@stylistic/semi-spacing': 'error',
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': [
        'error',
        {
            asyncArrow: 'always',
            anonymous: 'never',
            named: 'never',
        },
    ],
    '@stylistic/spaced-comment': [
        'error',
        'always',
    ],
    '@stylistic/switch-colon-spacing': 'error',
    '@stylistic/yield-star-spacing': [
        'error',
        'after',
    ],
    'camelcase': [
        'error',
        {
            properties: 'never',
        },
    ],
    'constructor-super': 'error',
    'curly': [
        'error',
        'multi-line',
    ],
    'guard-for-in': 'error',
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'off',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-multi-str': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-unexpected-multiline': 'error',
    'no-this-before-super': 'error',
    'no-unused-vars': [
        'error',
        {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
        },
    ],
    'no-var': 'error',
    'no-with': 'error',
    'one-var': [
        'error',
        {
            const: 'never',
            let: 'never',
            var: 'never',
        },
    ],
    'prefer-const': [
        'error',
        {
            destructuring: 'all',
        },
    ],
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
};

export const baseConfig = {
    name: '@fr0st/eslint-config/base',
    plugins: {
        '@stylistic': stylistic,
    },
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules,
};

export const browserConfig = {
    name: '@fr0st/eslint-config/browser',
    languageOptions: {
        globals: {
            ...globals.browser,
        },
    },
};

export const nodeConfig = {
    name: '@fr0st/eslint-config/node',
    languageOptions: {
        globals: {
            ...globals.node,
        },
    },
};

export default baseConfig;
