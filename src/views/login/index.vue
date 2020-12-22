<template>
  <div class='login-page'>
    <LoginHeader type='message.__DL__'></LoginHeader>
    <div class='login-content'>
      <div class="page-title">{{$t('message.__HYDL__')}}</div>
      <div class="page-subtitle">{{$t('message.__FBSCCYJCFWS__')}}</div>
      <img src="@/assets/image/login-bg.png" class='login-bg' alt="">
      <div class='input-panel'>
        <div class="panel-title">{{$t('message.__DL__')}}</div>
        <div class="panel-content">
          <a-input v-model="username" :placeholder="$t('message.__SJHYXDZ__')" allowClear size='large'></a-input>
          <a-input v-model="password" class='input-2' :placeholder="$t('message.__SRMM__')" allowClear size='large'></a-input>
          <a-button type='primary' @click='login'>{{$t('message.__LJDL__')}}</a-button>
          <div class='login-hint'>
            <div>{{$t('message.__MYZH__')}}<span class='orange-mark pointer' @click="$goto('/register')">{{$t('message.__ZC__')}}</span></div>
            <div class='orange-mark pointer'  @click="$goto('/findPassword')">{{$t('message.__WJMM__')}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginHeader from '../../components/LoginHeader'

export default {
  components: {
    LoginHeader
  },
  data() {
    return {
      username: undefined,
      password: undefined
    }
  },
  methods: {
    login() {

    }
  }
}
</script>

<style lang="less" scoped>
.login-page{
  .login-content{
    width:1200px;
    height: 100%;
    flex:1;
    margin:0 auto;
    position: relative;
  }
  .page-title{
    line-height: 34px;
    font-size: 36px;
    font-weight: 500;
    color: #333333;
    margin:94px 0 13px 63px;
  }
  .page-subtitle{
    margin:15px 0 0 63px;
    font-size: 18px;
    line-height: 18px;
    font-weight: 500;
    color: @orange;
  }
  .login-bg{
    width:1024px;
    margin-left:-73px;
    margin-top:-20px;
  }
}
.input-panel{
  position: absolute;
  right:0;
  top:95px;
  width:526px;
  background: #FFFFFF;
  border: 1px solid rgba(201, 201, 201, 0.24);
  border-radius: 8px;
  .panel-title{
    line-height: 24px;
    font-size: 24px;
    font-weight: 400;
    color: #333333;
    padding:32px 0 20px;
    text-align: center;
    border-bottom:1px solid #F6F6F6;
  }
  .panel-content{
    padding:62px 82px 124px;
  }
  .input-2{
    margin-top:22px;
  }
  .ant-btn-primary{
    width:100%;
    height: 54px;
    border-radius: 4px;
    font-size: 18px;
    margin:47px 0 32px;
  }
  .login-hint{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
  }
}
</style>
<style lang="less">
.login-content .ant-input{
  border-radius: 0;
}
</style>