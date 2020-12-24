<template>
  <!-- 登录、注册、账号密码 表单 -->
  <div>
    <div class='input-item' v-for='(item,index) in formSetting' :key='index'>
      <div class="item-row">
        <div class='item-label'>{{ $t(item.label) }}</div>

        <!-- 验证码 -->
        <div v-if="item.type==='code'" class='code-input ant-input-46'>
          <a-input v-model="form[item.key]" :placeholder="$t(item.placeholder)" :maxLength='6'>
          </a-input>
          <span class='orange-mark pointer get-code-btn'
            @click='getCode(item)'>{{$t('message.__HQYZM__')}}</span>
        </div>

        <!-- 手机号 -->
        <div v-else-if="item.type==='phone'" class='phont-input ant-input-46'>
          <div class='phone-select'>86
            <a-icon type="caret-down" class='down-icon' />
          </div>
          <a-input v-model="form[item.key]" class='ant-input-46' allowClear
            :placeholder="$t(item.placeholder)" :maxLength='20'></a-input>
        </div>

        <!-- 密码、密码重复 -->
        <a-input-password v-else-if="item.type==='password' || item.type==='passwordCopy'"
          v-model="form[item.key]" class='ant-input-46' allowClear
          :placeholder="$t(item.placeholder)" :maxLength='30' />

        <!-- 输入框 -->
        <a-input v-else v-model="form[item.key]" class='ant-input-46' allowClear
          :placeholder="$t(item.placeholder)" :maxLength='40'>
        </a-input>
      </div>
      <div class='error-hint'>{{ errorHint[item.key] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formSetting: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      errorHint: {},
      form: {}
    };
  },
  created() {
    (this.formSetting || []).forEach(item => {
      this.$set(this.errorHint, item.key, undefined)
      this.$set(this.form, item.key, undefined)
    })
  },
  methods: {
    clear() {
      this.errorHint = {}
      this.form = {}
    },
    // 校验用户输入并返回
    valid(callback) {
      let flag = false
      this.formSetting.forEach(item => {
        const res = this.check(item)
        this.errorHint[item.key] = res
        if (res) {
          flag = true
        }
      })
      if (flag) {
        callback(new Error())
        return
      }
      callback(null, { ...this.form })
    },
    getCode(item) {
      if (!this.form[item.relationKey]) {
        this.$message.error('请输入' + this.$t(item.relationLabel))
      }
    },
    check(item) {
      const value = this.form[item.key] || ''
      const type = item.type
      if (item.noCheck && !value) {
        return '请输入' + this.$t(item.label)
      } else if (type === 'phone') {
        const res = /^1[3456789]\d{9}$/.test(value)
        if (!res) {
          return '请输入正确格式的手机号'
        }
      } else if (type === 'email') {
        const res = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value)
        if (!res) {
          return '请输入正确格式的邮箱'
        }
      } else if (type === 'password') {
        const res = /^[0-9a-zA-Z]{8,20}$/.test(value)
        if (!res) {
          return '请输入8-20位数字和字母，不包含特殊字符'
        }
      } else if (type === 'passwordCopy') {
        const password = this.form[item.relationKey]
        const res = /^[0-9a-zA-Z]{8,20}$/.test(value) && (value === password)
        if (!res) {
          return '密码不一致'
        }
      } else if (!value) {
        return '请输入' + this.$t(item.label)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.input-item{
  .item-row{
    display: flex;
    align-items: center;
  }
  .item-label{
    min-width:100px;
    font-size: 16px;
    color: #333333;
    line-height: 16px;
  }
}
.error-hint{
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color:#E23F3F;
  font-weight: 400;
  margin:6px 0 12px 100px;
}
.code-input{
  width:100%;
  position: relative;
  .get-code-btn{
    position: absolute;
    right:16px;
    top:50%;
    transform: translateY(-50%);
    font-size: 16px;
    line-height: 16px;
  }
}
.phont-input{
  width:100%;
  display: flex;
  align-items: center;
  .phone-select{
    width:62px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    border:1px solid #d9d9d9;
    border-right: none;
  }
  .down-icon{
    color:#999999;
    margin-left:6px;
  }
  .ant-input-affix-wrapper{
    flex:1;
  }
}
</style>

<style lang="less">
.ant-input-46 .ant-input{
  height: 46px;
  border-radius: 0;
  padding-left:25px;
}
</style>