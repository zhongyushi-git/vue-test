module.exports = {
    configurewebpack: {
        resolve: {
            //配置别名
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'myCommon': '@/myCommon',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}