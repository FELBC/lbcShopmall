<template>
  <div>
    <order-header :title='title'>
      <template v-slot:tip>
        <span>{{tip}}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import ServiceBar from './../components/ServiceBar'
import NavFooter from './../components/NavFooter'
export default {
  name:'order',
  data() {
    return {
      title:'',
      tip:''
    }
  },
  components:{
    OrderHeader,
    ServiceBar,
    NavFooter
  },
  mounted() {
    //获取当前路由地址
    let path = this.$route.path; 
    switch (path) {
      case '/order/confirm':
        this.title="订单确认";
        this.tip="请认真填写收获地址";
        break;
      case '/order/list':
        this.title="订单列表";
        this.tip="请谨防钓鱼链接或诈骗电话，了解更多>";
        break;
      case '/order/pay':
        this.title="订单支付";
        this.tip="请谨防钓鱼链接或诈骗电话，了解更多>";
        break;
      default:
        this.title="订单支付";
        this.tip="请谨防钓鱼链接或诈骗电话，了解更多>";
        break;
    }
  },
}
</script>