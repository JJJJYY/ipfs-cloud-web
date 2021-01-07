<template>
  <!-- 账号设置 popup -->
  <a-modal v-model="visible" :centered='true' :title="title" class='setting-popup' ok-text="确定"
    cancel-text="取消" @ok="handleOk" @cancel='handleCancle' :confirmLoading='loading'>

    <div v-show="type==='loginPassword'">
      <BaseForm ref='LoginPasswordForm' :formSetting='LoginPasswordFormSetting'></BaseForm>
    </div>

    <div v-show="type==='phone'">
      <BaseForm ref='PhoneForm' :formSetting='PhoneFormSetting'></BaseForm>
    </div>

    <div v-show="type==='email'">
      <BaseForm ref='EmailForm' :formSetting='EmailFormSetting'></BaseForm>
      <div class='hint'>验证码可能会被判为垃圾邮件请注意查收</div>
    </div>

  </a-modal>
</template>

<script>
import md5 from 'md5'
import BaseForm from './BaseForm'
import { modifyPassword, modifyPhone, modifyEmail } from '../api'

export default {
  name: 'AccountSettingPopup',
  components: {
    BaseForm
  },
  data() {
    return {
      visible: false,
      loading: false,
      type: undefined,
      title: undefined,
      LoginPasswordFormSetting,
      EmailFormSetting,
      PhoneFormSetting,
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    show(type) {
      this.type = type
      this.title = this.getTitle(type)
      this.visible = true
    },
    getTitle(type) {
      if (type === 'loginPassword') {
        return '修改登录密码'
      } else if (type === 'phone') {
        return this.$store.state.user.phone ? '更换绑定手机号' : '绑定手机号'
      } else if (type === 'email') {
        return this.$store.state.user.email ? '更换绑定邮箱' : '绑定邮箱'
      }
    },
    handleOk() {
      if (this.type === 'loginPassword') {
        this.changeLoginPassword()
      } else if (this.type === 'phone') {
        this.changePhone()
      } else if (this.type === 'email') {
        this.changeEmail()
      }
    },
    // 绑定邮箱
    changeEmail() {
      this.$refs.EmailForm.valid((err, value) => {
        if (err) {
          return
        }
        this.loading = true

        modifyEmail(value).then(res => {
          this.loading = false
          this.$message.success('修改成功，请重新登录！')
          localStorage.removeItem('token')
          this.$store.commit('updateUser', {})
          this.$router.push('/login')
        }).catch(err => {
          this.loading = false
          this.$message.error(err || '操作失败，请稍后再试！')
        })
      })
    },
    // 绑定手机
    changePhone() {
      this.$refs.PhoneForm.valid((err, value) => {
        if (err) {
          return
        }
        this.loading = true

        modifyPhone(value).then(res => {
          this.loading = false
          this.$message.success('修改成功，请重新登录！')
          localStorage.removeItem('token')
          this.$store.commit('updateUser', {})
          this.$router.push('/login')
        }).catch(err => {
          this.loading = false
          this.$message.error(err || '操作失败，请稍后再试！')
        })
      })
    },
    // 修改登陆密码
    changeLoginPassword() {
      this.$refs.LoginPasswordForm.valid((err, value) => {
        if (err) {
          return
        }
        this.loading = true
        delete value.passwordCopy
        value.old_password = md5(value.old_password)
        value.password = md5(value.password)

        modifyPassword(value).then(res => {
          this.loading = false
          this.$message.success('修改成功，请重新登录！')
          localStorage.removeItem('token')
          this.$store.commit('updateUser', {})
          this.$router.push('/login')
        }).catch(err => {
          this.loading = false
          this.$message.error(err || '操作失败，请稍后再试！')
        })
      })
    },
    handleCancle() {
      if (this.$refs.LoginPasswordForm) {
        this.$refs.LoginPasswordForm.clear()
      }
      if (this.$refs.PhoneForm) {
        this.$refs.PhoneForm.clear()
      }
      if (this.$refs.EmailForm) {
        this.$refs.EmailForm.clear()
      }
      this.visible = false
    }
  }
}

const LoginPasswordFormSetting = [{
  label: '原登录密码',
  key: 'old_password',
  type: 'password',
  noCheck: true,
  placeholder: '请输入原登录密码'
}, {
  label: '新登录密码',
  key: 'password',
  type: 'password',
  placeholder: '请输入8-20位字符，不能为纯数字'
}, {
  label: '确认新密码',
  key: 'passwordCopy',
  type: 'passwordCopy',
  relationKey: 'password',
  placeholder: '请输入新登录密码'
}]

const EmailFormSetting = [{
  label: '邮箱',
  key: 'email',
  type: 'email',
}, {
  label: '邮箱验证码',
  key: 'code',
  type: 'code',
  relationType: 'email',
  relationKey: 'email',
  relationLabel: '邮箱',
}]

const PhoneFormSetting = [{
  label: '手机号',
  key: 'phone',
  type: 'phone',
}, {
  label: '手机验证码',
  key: 'code',
  type: 'code',
  relationType: 'phone',
  relationKey: 'phone',
  relationLabel: '手机号',
}]

</script>

<style lang="less" scoped>
.ant-modal .ant-input-46 .ant-input{
  height: 42px;
}
</style>
<style lang="less">
.setting-popup {
  .ant-modal-header{
    border:none;
    text-align: center;
    font-size: 16px;
    color: #333333;
  }
  .ant-modal-body{
    padding:24px 32px 0 32px;
  }
  .ant-input-46 .ant-input{
    height: 42px;
  }
  .ant-input-46 .phone-select{
    height: 42px;
    line-height: 42px;
  }
  .hint{
    padding-left:100px;
    margin-bottom: 15px;
  }
  // .error-hint{
  //   height: 7px;
  // }
  .ant-modal-footer{
    border-top:none;
    padding-bottom:30px;
    padding-right: 32px;
  }
  .ant-btn{
    width: 76px;
    height: 30px;
  }
}
</style>