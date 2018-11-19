module.export = {
    baseUrl: '/',
    outputDir: 'dist',
    pages: undefined,
    lintOnSave: true,
    runtimeCompiler: false,
    transpileDependencies: [],
    productionSourceMap: true,
    configureWebpack:()=>{},
    chainWebpack: ()=>{},
    css: {
        modules: false,
        extract: true,
        sourceMap: false,
        loaderOptions: {}
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null,
        before: app => {}
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    pluginOptions :{
        
    }
}