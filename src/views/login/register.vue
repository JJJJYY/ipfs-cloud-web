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

        <div class="agree-hint">
          <img v-show='!isAgree' class='pointer checkbox-icon' src="@/assets/image/checkbox.png"
            alt="" @click='isAgree=true'>
          <img v-show='isAgree' class='pointer checkbox-icon' src="@/assets/image/checkbox-fill.png"
            alt="" @click='isAgree=false'>{{$t('message.__WYYDBTY__')}} <span
            class='orange-mark pointer'>{{$t('message.__YHXY__')}}</span>
        </div>

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
  name: 'register',
  components: {
    LoginHeader,
    BaseForm
  },
  data() {
    return {
      type: 1,
      PhoneFormSetting,
      EmailFormSetting,
      isAgree: false
    }
  },
  methods: {
    register() {
      if (!this.isAgree) {
        this.$message.error('请先阅读用户协议并同意！')
        return
      }
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
  relationType: 'phone',
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
  relationType: 'email',
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
  margin-top: 19px;
  margin-left:100px;
  line-height: 16px;
  .checkbox-icon{
    width:14px;
    height: 14px;
    margin-right: 11px;
  }
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