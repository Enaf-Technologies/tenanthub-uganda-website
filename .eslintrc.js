module.exports = exports = {
    "parserOptions": {
        "parser": "babel-eslint",
        "sourceType": "module",
        "ecmaVersion": 2015
    },
    'rules': {

        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/no-unused-components': 'off'
    }

}
