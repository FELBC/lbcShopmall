module.exports = {
  //配置到自己github reporsity地址 /lbcShopmall
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // TODO: Remember to change this to fit your need
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn', // 线上接口地址
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
}
