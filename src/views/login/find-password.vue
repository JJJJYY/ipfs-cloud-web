<template>
<!-- 找回密码 -->
  <div class='login-page'>
    <LoginHeader type='message.__WJMM__'></LoginHeader>
    <div class='account-content'>
      <div class="hint orange-mark pointer" @click="$goto('/register')">{{$t('message.__ZCZH__')}}</div>
      <div class='account-operate-panel'>
        <div class='tabs panel-title'>
          <div class="pointer" >{{$t('message.__WJMM__')}}</div>
        </div>
        <div class='input-row'>
          <InputItem label="message.__ZH__" placeholder='message.__QSRSJHHYXDD__' :errorHint='errorHint.hint1'></InputItem>
          <InputItem label="message.__YZM__" type='code' placeholder='message.__QSRYZM__' :errorHint='errorHint.hint2'></InputItem>
          <InputItem label="message.__SZMM__" placeholder='message.__QSRXMM__' :errorHint='errorHint.hint3'></InputItem>
          <InputItem label="message.__QRMM__" placeholder='message.__QQRXMM__' :errorHint='errorHint.hint4'></InputItem>
        </div>

        <a-button type='primary' @click='register'>{{$t('message.__CZMM__')}}</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import LoginHeader from '../../components/LoginHeader'
import InputItem from '../../components/InputItem'

export default {
  components: {
    LoginHeader,
    InputItem
  },
  data() {
    return {
      errorHint: {
        hint1: undefined,
        hint2: undefined,
        hint3: undefined,
        hint4: undefined,
      }
    }
  },
  methods: {
    register() {

    }
  }
}
</script>

<style lang="less" scoped>
.tabs{
  display: flex;
  justify-content: center;
  .split-line{
    margin:0 22px;
    color:#D0D0D0;
  }
}
.agree-hint{
  margin-left:100px;
}
.ant-btn-primary{
  width:384px;
  height: 54px;
  border-radius: 4px;
  font-size: 18px;
  margin-top:40px;
  margin-left:100px;
}
</style>