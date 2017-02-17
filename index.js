module.exports = {
    extends: 'airbnb-base',
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'valid-jsdoc': [
            'error',
            {
                requireReturn: false,
                prefer: {
                    return: 'return',
                },
            },
        ],
        'no-unused-vars': [
            'error',
            {
                args: 'none',
            },
        ],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
            },
        ],
        'global-require': 'off',
        'max-len': [
            'error',
            120,
        ],
        'no-underscore-dangle': 'off',
        'space-before-function-paren': [
            'error',
            'never',
        ],
        'no-plusplus': 'off',
        'no-restricted-properties': 'off',
    },
};
