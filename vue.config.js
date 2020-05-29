module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/spare-the-child/'
        : '/',
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ]
}