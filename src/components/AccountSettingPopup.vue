<template>
<!-- 账号设置 popup -->
  <a-modal v-model="visible" :centered='true' :title="title" class='setting-popup'>

    <div v-show="type==='loginPassword'">
      <InputItem label="原登录密码" placeholder='请输入原登录密码' :errorHint='errorHint.hint1'></InputItem>
      <InputItem label="新登录密码" placeholder='请输入8-20位字符，不能为纯数字' :errorHint='errorHint.hint2'></InputItem>
      <InputItem label="确认新密码" placeholder='请输入新登录密码' :errorHint='errorHint.hint3'></InputItem>
    </div>

     <div v-show="type==='phone'">
      <InputItem label="新手机号" :errorHint='errorHint.hint4'></InputItem>
      <InputItem label="手机验证码" type='code' :errorHint='errorHint.hint5'></InputItem>
    </div>

     <div v-show="type==='email'">
      <InputItem label="邮箱" :errorHint='errorHint.hint6'></InputItem>
      <InputItem label="邮箱验证码" type='code' :errorHint='errorHint.hint7'></InputItem>
      <div class='hint'>验证码可能会被判为垃圾邮件请注意查收</div>
    </div>

    <template slot="footer">
      <a-button @click='handleCancle'>取消</a-button>
      <a-button type="primary" :loading="loading" @click="handleOk">确定</a-button>
    </template>
  </a-modal>
</template>

<script>
import InputItem from './InputItem'

export default {
  components: {
    InputItem
  },
  data() {
    return {
      visible: false,
      loading: false,
      type: undefined,
      title: undefined,
      titleMap: {
        loginPassword: '修改登录密码',
        phone: '更换绑定手机号',
        email: '绑定邮箱',
      },
      errorHint: {
        hint1: undefined,
        hint2: undefined,
        hint3: undefined,
        hint4: undefined,
        hint5: undefined,
        hint6: undefined,
        hint7: undefined,
      }
    }
  },
  methods: {
    show(type) {
      this.type = type
      this.title = this.titleMap[type] || ''
      this.visible = true
    },
    handleOk() {

    },
    handleCancle() {
      this.visible = false
    }
  }
}
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
  .hint{
    padding-left:100px;
    margin-bottom: 15px;
  }
  .error-hint{
    height: 7px;
  }
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