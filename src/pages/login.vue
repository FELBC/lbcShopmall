<template>
  <div class="login">
    <div class="container">
      <a href="/#/index">
        <img src="./../assets/imgs/login-logo.png" alt="">
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">账号登录</span>
            <span class="sep-line">|</span>
            <span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" autocomplete="off" placeholder="请输入账号" v-model="username">
          </div>
          <div class="input">
            <input type="password" autocomplete="off" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="javascript:;">个人项目1</a><span>|</span>
        <a href="javascript:;">个人项目2</a><span>|</span>
        <a href="javascript:;">个人项目3</a>
      </div>
      <p class="copyright">Copyright ©2020 lbcShopmall All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';
  export default {
    name:'login',
    data(){
      return{
        username:'qiufeng',
        password:'qiufeng',
        userId:''
      }
    },
    methods: {
      login(){
        let { username, password} = this;
        this.axios.post('/user/login',{
          username,
          password
        }).then(res=>{
          this.$cookie.set('userId',res.id,{expires:'1M'});
          // this.$store.dispatch('saveUserName',res.username);
          this.saveUserName(res.username);
          this.$router.push('/index');
        });
      },
      ...mapActions(['saveUserName']),
      register(){
        this.axios.post('/user/register',{
          username:'qiufeng',
          password:'qiufeng',
          email:'qiufeng@163.com'
        }).then(()=>{
          alert('注册成功')
        });
      }
    },
  }
</script>
<style lang="scss">
  .login{
    &>.container{
      height:113px;
      img{
        width:auto;
        height:100%;
      }
    }
    .wrapper{
      background:url('./../assets/imgs/login-bg.jpg') no-repeat center;
      .container{
        height:576px;
        .login-form{
          box-sizing: border-box;
          padding-left:31px;
          padding-right:31px;
          width:410px;
          height:510px;
          background-color:#fff;
          position:absolute;
          bottom:29px;
          right:0;
          h3{
            line-height: 23px;
            font-size:24px;
            text-align: center;
            margin:40px auto 49px;
            .checked{
              color:#FF6600;
            }
            .sep-line{
              margin:0 32px;
            }
          }
          .input{
            display: inline-block;
            width:348px;
            height:50px;
            border:1px solid #E5E5E5;
            margin-bottom: 20px;
            input{
              width:100%;
              height:100%;
              border:none;
              padding-left:18px;
            }
          }
          .btn{
            width:100%;
            line-height: 50px;
            margin-top:10px;
            font-size:16px
          }
          .tips{
            margin-top:14px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            cursor: pointer;
            .sms{
              color:#FF6600;
            }
            .reg{
              color:#999;
              span{
                margin:0 7px;
              }
            }
          }
        }
      }
    }
    .footer{
      height: 100px;
      padding-top:60px;
      color:#999;
      font-size: 16px;
      text-align: center;
      .footer-link{
        a{
          color:#999;
          display: inline-block;
        }
        span{
          margin:0 10px;
        }
      }
      .copyright{
        margin-top:13px;
      }
    }
  }
</style>