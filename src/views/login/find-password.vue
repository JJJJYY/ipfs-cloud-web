<template>
  <!-- 找回密码 -->
  <div class='login-page'>
    <LoginHeader type='message.__WJMM__'></LoginHeader>
    <div class='account-content'>
      <div class="hint orange-mark pointer" @click="$goto('/register')">{{$t('message.__ZCZH__')}}
      </div>
      <div class='account-operate-panel'>
        <div class='tabs panel-title'>
          <div class="pointer">{{$t('message.__WJMM__')}}</div>
        </div>
        <div class='input-row'>
          <BaseForm ref='Form' :formSetting='FormSetting'></BaseForm>
        </div>

        <a-button type='primary' @click='submit'>{{ $t('message.__CZMM__') }}</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import LoginHeader from '../../components/LoginHeader'
import BaseForm from '../../components/BaseForm'
// import { modifyPassword } from '../../api'

export default {
  components: {
    LoginHeader,
    BaseForm
  },
  data() {
    return {
      FormSetting
    }
  },
  methods: {
    submit() {
      this.$refs.Form.valid((err, value) => {
        if (err) {
          return
        }
        delete value.passwordCopy
        // value.password = md5(value.password)

        // modifyPassword(value).then(res => {
        //   this.$message.success('修改成功，请登录！')
        //   this.$router.push('/login')
        // }).catch(err => {
        //   this.$message.success(err || '操作失败，请稍后再试！')
        // })
      })
    }
  }
}

const FormSetting = [{
  label: 'message.__ZH__',
  key: 'account',
  type: 'account',
  placeholder: 'message.__QSRSJHHYXDD__'
}, {
  label: 'message.__YZM__',
  key: 'code',
  type: 'code',
  relationKey: 'account',
  relationLabel: 'message.__ZH__',
  placeholder: 'message.__QSRYZM__'
}, {
  label: 'message.__SZMM__',
  key: 'password',
  type: 'password',
  placeholder: 'message.__QSRXMM__'
}, {
  label: 'message.__QRMM__',
  key: 'passwordCopy',
  type: 'passwordCopy',
  relationKey: 'password',
  placeholder: 'message.__QQRXMM__'
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