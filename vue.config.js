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
  //设置跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8019', //设置调用的接口域名和端口号
        // changeOrigin: true,
        pathRewrite: {
          '^/training': '' //这里理解成用‘/training’代替target里面的地址，一般设置的是后端的项目名称
        }
      }
    }
  },
}
