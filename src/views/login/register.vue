<template>
<!-- 注册 -->
  <div class='login-page'>
    <LoginHeader type='message.__ZHZC__'></LoginHeader>
    <div class='account-content'>
      <div class="hint">{{$t('message.__YYZH__')}}<span class='pointer orange-mark' @click="$goto('/login')">{{$t('message.__DL__')}}</span></div>
      <div class='account-operate-panel'>
        <div class='tabs panel-title'>
          <div :class="['pointer',type===1?'orange-mark':'']" @click='type=1'>{{$t('message.__SJZC__')}}</div>
          <span class='split-line'>|</span>
          <div :class="['pointer',type===2?'orange-mark':'']"  @click='type=2'>{{$t('message.__YXZC__')}}</div>
        </div>
        <div class='input-row' v-show='type===1'>
          <InputItem label="message.__SJH__" type='phone' placeholder='message.__QSRSJH__' :errorHint='errorHint.hint1'></InputItem>
          <InputItem label="message.__YZM__" type='code' placeholder='message.__QSRYZM__' :errorHint='errorHint.hint2'></InputItem>
          <InputItem label="message.__SZMM__" placeholder='message.__QSZMM__' :errorHint='errorHint.hint3'></InputItem>
          <InputItem label="message.__QRMM__" placeholder='message.__QQRMM__' :errorHint='errorHint.hint4'></InputItem>
        </div>

        <div class='input-row' v-show='type===2'>
          <InputItem label="message.__YX__" placeholder='message.__QSRYXH__' :errorHint='errorHint.hint5'></InputItem>
          <InputItem label="message.__YZM__" type='code' placeholder='message.__QSRYZM__' :errorHint='errorHint.hint6'></InputItem>
          <InputItem label="message.__SZMM__" placeholder='message.__QSZMM__' :errorHint='errorHint.hint7'></InputItem>
          <InputItem label="message.__QRMM__" placeholder='message.__QQRMM__' :errorHint='errorHint.hint8'></InputItem>
        </div>

        <div class="agree-hint">{{$t('message.__WYYDBTY__')}} <span class='orange-mark pointer'>{{$t('message.__YHXY__')}}</span></div>

        <a-button type='primary' @click='register'>{{$t('message.__LJZC__')}}</a-button>
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
      type: 1,
      errorHint: {
        hint1: undefined,
        hint2: undefined,
        hint3: undefined,
        hint4: undefined,
        hint5: undefined,
        hint6: undefined,
        hint7: undefined,
        hint8: undefined,
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