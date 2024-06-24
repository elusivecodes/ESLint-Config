import globals from 'globals';

export default {
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
            ...globals.browser,
        },
    },
    files: [
        '*.js',
        'src/**/*.js',
        'test/**/*.js',
    ],
    rules: {
        'array-bracket-newline': 'off',
        'array-bracket-spacing': [
            'error',
            'never',
        ],
        'array-element-newline': 'off',
        'arrow-parens': [
            'error',
            'always',
        ],
        'block-spacing': [
            'error',
            'never',
        ],
        'brace-style': 'error',
        'camelcase': [
            'error',
            {
                properties: 'never',
            },
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'constructor-super': 'error',
        'curly': [
            'error',
            'multi-line',
        ],
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'guard-for-in': 'error',
        'indent': [
            'error',
            4,
            {
                MemberExpression: 'off',
                SwitchCase: 1,
            },
        ],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': 'error',
        'max-len': 'off',
        'new-cap': 'error',
        'no-array-constructor': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'off',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-invalid-this': 'off',
        'no-irregular-whitespace': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
            },
        ],
        'no-new-object': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-throw-literal': 'error',
        'no-unexpected-multiline': 'error',
        'no-tabs': 'error',
        'no-this-before-super': 'error',
        'no-trailing-spaces': 'error',
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '_',
                varsIgnorePattern: '_',
            },
        ],
        'no-var': 'error',
        'no-with': 'error',
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'one-var': [
            'error',
            {
                var: 'never',
                let: 'never',
                const: 'never',
            },
        ],
        'operator-linebreak': [
            'error',
            'after',
        ],
        'padded-blocks': [
            'error',
            'never',
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
        'quote-props': [
            'error',
            'consistent',
        ],
        'quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        'rest-spread-spacing': 'error',
        'semi': 'error',
        'semi-spacing': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                asyncArrow: 'always',
                anonymous: 'never',
                named: 'never',
            },
        ],
        'spaced-comment': [
            'error',
            'always',
        ],
        'switch-colon-spacing': 'error',
        'yield-star-spacing': [
            'error',
            'after',
        ],
    },
};
