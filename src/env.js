// 基于jsonp，cros跨域才需要建这样的变量，根据yarn run serve/test/build传入不同baseURL
// 代理方式则直接修改vue.config.js target地址来变换不同环境

let baseURL;
// 获取当前nodejs进程里面的一些环境变量
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'production':
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
  default:
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
}

export default{
  baseURL
}