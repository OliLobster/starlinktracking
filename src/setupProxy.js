const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/api',// 代理路径
        createProxyMiddleware( {
            target: 'https://api.n2yo.com/rest/v1/satellite/above', // 目标路径
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // 重写原路径
            }
        })
    )
    app.use(
        '/apc',// 代理路径
        createProxyMiddleware( {
            target: 'https://api.n2yo.com/rest/v1/satellite/positions', // 目标路径
            changeOrigin: true,
            pathRewrite: {
                '^/apc': '', // 重写原路径
            }
        })
    )
}
