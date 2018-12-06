// module.export = {
//     baseUrl: '/',
//     outputDir: 'dist',
//     pages: undefined,
//     lintOnSave: true,
//     runtimeCompiler: false,
//     transpileDependencies: [],
//     productionSourceMap: true,
//     configureWebpack:()=>{},
//     chainWebpack: ()=>{},
//     css: {
//         modules: false,
//         extract: true,
//         sourceMap: false,
//         loaderOptions: {}
//     },
//     devServer: {
//         host: '0.0.0.0',
//         port: 8080,
//         https: false,
//         hotOnly: false,
//         proxy: null,
//         before: app => {}
//     },
//     parallel: require('os').cpus().length > 1,
//     pwa: {},
//     pluginOptions :{
        
//     }
// }

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
    path: {
        index: {
            entry: 'src/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors','chunk-common','index']
        },
        subpage: 'src/subpage/main.js'
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: 'http://localhost:4000'
    },
    lintOnSave: process.env.NODE_ENV !== 'production',
    css: {
        loaderOptions: {
            css: {
                
            },
            postcss: {

            }
        }
    },
    pluginOptions: {
        foo: {

        }
    }
}