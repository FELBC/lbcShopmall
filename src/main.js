import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios' // 将作用域对象挂载到vue实例上，方便用this调用
import App from './App.vue'
import env from './env'

// jsonp，cros当后端域名与前端不一样时候需全写，eg：'http:///www.dev.com/api'
// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'; // 接口代理/a/b : /api/a/b => /a/b：当前接口域名和前端域名一样可简写
axios.defaults.timeout = 8000; // 请求超时时间，提升用户体验

// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL;

// 接口错误拦截(状态码需前后台根据业务协定,eg:0-成功，10-未登录)
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status === 0){
    return res.data;
  }else if(res.status === 10){
    // 无法使用路由进行跳转，路由挂载在vue实例，App.vue及每个页面才能使用this.$route.push,取不到this
    window.location.href='/#/login'; 
  }else{
    alert(res.msg)
  }
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
// 默认非生产环境
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
