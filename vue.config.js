module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'myCommon': '@/myCommon',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
}