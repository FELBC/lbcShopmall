import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios' // 将作用域对象挂载到vue实例上，方便用this调用
import VueLazyLoad from "vue-lazyload"
import VueCookie from 'vue-cookie'
import {
  Message
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App.vue'
// import env from './env'

/**
 * mock文件'./mock/api'不能用import导入，需要用require，
 * import与require区别：
 * import预编译加载，在编译的时候文件就会被加载进来写入到内存，
 * require从上到下执行的时候才会加载，
 * mock为false的时候mock文件'./mock/api'不会被加载，
 * mock文件一旦被加载进来发送接口请求就会永远被拦截，
 * 只有mock开关为true被打开的时候才希望被拦截使用模拟数据
*/

// mock开关,true使用本地mock拦截数据，false使用接口数据
const mock = true
if(mock){
  require('./mock/api')
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'; // 接口代理/a/b : /api/a/b => /a/b：当前接口域名和前端域名一样可简写
axios.defaults.timeout = 8000; // 请求超时时间，提升用户体验
// 根据环境变量获取不同的请求地址
// jsonp，cros当后端域名与前端不一样时候需全写，eg：'http:///www.dev.com/api'
// axios.defaults.baseURL = env.baseURL;
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5eaeb7eaa47fe9570ba1346f'; // easy-mock

// 接口错误拦截(状态码需前后台根据业务协定,eg:0-成功，10-未登录)
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = location.hash;
  if(res.status === 0){
    return res.data;
  }else if(res.status === 10){
    if(path !== '#/index'){
      // 无法使用路由进行跳转，路由挂载在vue实例，App.vue及每个页面才能使用this.$route.push,取不到this
      window.location.href='/#/login'; 
    }
    return Promise.reject(res);
  }else{
    Message.warning(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
  // 服务端异常拦截提示
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
})
// 请求拦截(后台管理系统，表单查询，参数较多)
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 加载插件
Vue.use(VueAxios,axios);
Vue.use(VueCookie)
Vue.use(VueLazyLoad,{
  loading:require('./assets/imgs/loading-svg/loading-bars.svg')
});
// 以对象原型方式在vue实例上进行扩展，避免每个组件进行引用
Vue.prototype.$message = Message;
// 默认非生产环境
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
