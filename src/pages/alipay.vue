<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import Loading from './../components/Loading'
export default {
  name:'alipay',
  components:{
    Loading
  },
  data() {
    return {
      orderId:this.$route.query.orderId,
      content:'',
      loading:true
    }
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit(){
      let payUrl = process.env.NODE_ENV === 'production'?'/alipay':'pay'
      this.axios.post(payUrl,{ //真实接口地址：/pay
        orderId:this.orderId, // 订单编号
        orderName:'景云商城', // 扫码支付时订单名称
        amount:0.01, // 支付金额单位元
        payType:1 // 1支付宝，2微信
      }).then(res=>{
        this.content = res.content;
        setTimeout(() => {
          document.forms[0].submit();
        }, 100);
      });
    }
  },
}
</script>