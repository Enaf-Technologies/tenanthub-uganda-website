module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "TenantHub Uganda";
                return args;
            }),
            config.module.rules.delete('eslint');
    },
    transpileDependencies: [
        /\bvue-awesome\b/
      ],
}
