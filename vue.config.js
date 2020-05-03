module.exports = {
  //配置到自己github reporsity地址 /lbcShopmall
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // TODO: Remember to change this to fit your need
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://dev-mall-pre.springboot.cn/api',
        // target:'http://test-mall-pre.springboot.cn/api',
        // target:'http://mall-pre.springboot.cn/api',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
}
