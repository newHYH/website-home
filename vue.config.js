module.exports = {
    publicPath:'./',
    devServer: {
        proxy: {
           '/model': {
                //target: 'http://10.124.193.151:8082',
                target: 'http://192.168.0.139:8888',
                changeOrigin: true,
                ws: false,
                pathRewrite: { '^/model': '/model' }
            },
        }
    },
    configureWebpack: {
        externals: {
            "BMap": 'BMap'
        }
    }
}