module.exports = {
    publicPath:'./',
    devServer: {
        proxy: {
           '/model': {
                //target: 'http://10.124.193.151:8082',
                target: 'http://210.73.216.2:8099',
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