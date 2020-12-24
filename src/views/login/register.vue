<template>
  <!-- 注册 -->
  <div class='login-page'>
    <LoginHeader type='message.__ZHZC__'></LoginHeader>
    <div class='account-content'>
      <div class="hint">{{$t('message.__YYZH__')}}<span class='pointer orange-mark'
          @click="$goto('/login')">{{$t('message.__DL__')}}</span></div>
      <div class='account-operate-panel'>
        <div class='tabs panel-title'>
          <div :class="['pointer',type===1?'orange-mark':'']" @click='type=1'>
            {{$t('message.__SJZC__')}}</div>
          <span class='split-line'>|</span>
          <div :class="['pointer',type===2?'orange-mark':'']" @click='type=2'>
            {{$t('message.__YXZC__')}}</div>
        </div>
        <div class='input-row' v-show='type===1'>
          <BaseForm ref='PhoneForm' :formSetting='PhoneFormSetting'></BaseForm>
        </div>

        <div class='input-row' v-show='type===2'>
          <BaseForm ref='EmailForm' :formSetting='EmailFormSetting'></BaseForm>
        </div>

        <div class="agree-hint">{{$t('message.__WYYDBTY__')}} <span
            class='orange-mark pointer'>{{$t('message.__YHXY__')}}</span></div>

        <a-button type='primary' @click='register'>{{$t('message.__LJZC__')}}</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import LoginHeader from '../../components/LoginHeader'
import BaseForm from '../../components/BaseForm'
import { registerEmail, registerPhone } from '../../api/index'

export default {
  components: {
    LoginHeader,
    BaseForm
  },
  data() {
    return {
      type: 1,
      PhoneFormSetting,
      EmailFormSetting,
    }
  },
  methods: {
    register() {
      if (this.type === 1) {
        this.$refs.PhoneForm.valid((err, value) => {
          if (err) {
            return
          }
          delete value.passwordCopy
          value.password = md5(value.password)

          registerPhone(value).then(res => {
            this.$message.success('注册成功，请登录！')
            this.$router.push('/login')
          }).catch(err => {
            this.$message.error(err || '注册失败，请稍后再试！')
          })
        })
      } else {
        this.$refs.EmailForm.valid((err, value) => {
          if (err) {
            return
          }
          delete value.passwordCopy
          value.password = md5(value.password)

          registerEmail(value).then(res => {
            this.$message.success('注册成功，请登录！')
            this.$router.push('/login')
          }).catch(err => {
            this.$message.error(err || '注册失败，请稍后再试！')
          })
        })
      }
    }
  }
}

const PhoneFormSetting = [{
  label: 'message.__SJH__',
  key: 'phone',
  type: 'phone',
  placeholder: 'message.__QSRSJH__'
}, {
  label: 'message.__YZM__',
  key: 'code',
  type: 'code',
  relationKey: 'phone',
  relationLabel: 'message.__SJH__',
  placeholder: 'message.__QSRYZM__'
}, {
  label: 'message.__SZMM__',
  key: 'password',
  type: 'password',
  placeholder: 'message.__QSZMM__'
}, {
  label: 'message.__QRMM__',
  key: 'passwordCopy',
  type: 'passwordCopy',
  relationKey: 'password',
  placeholder: 'message.__QQRMM__'
}]

const EmailFormSetting = [{
  label: 'message.__YX__',
  key: 'email',
  type: 'email',
  placeholder: 'message.__QSRYXH__'
}, {
  label: 'message.__YZM__',
  key: 'code',
  type: 'code',
  relationKey: 'email',
  relationLabel: 'message.__YX__',
  placeholder: 'message.__QSRYZM__'
}, {
  label: 'message.__SZMM__',
  key: 'password',
  type: 'password',
  placeholder: 'message.__QSZMM__'
}, {
  label: 'message.__QRMM__',
  key: 'passwordCopy',
  type: 'passwordCopy',
  relationKey: 'password',
  placeholder: 'message.__QQRMM__'
}]
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