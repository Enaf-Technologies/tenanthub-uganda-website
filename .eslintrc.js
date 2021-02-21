module.exports = exports = {
    'parser': "babel-eslint",
    'rules' : {
    
        'no-console' : process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/no-unused-components': 'off'
        }

}
