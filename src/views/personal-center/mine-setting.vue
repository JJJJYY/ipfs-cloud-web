<template>
  <!-- 账户设置 -->
  <div class='user-settting'>
    <div class="panel-row">
      <div class="panel panel-1">
        <div class="panel-title">
          <img src="@/assets/image/password.png" class='panel-img' alt="">
          登陆密码
          <div class='btn' @click="changeSetting('loginPassword')">修改<img
              src="@/assets/image/more.png" class='more-img' alt=""></div>
        </div>
        <div class="status">已设置</div>
      </div>
      <div class="panel panel-2">
        <div class="panel-title">
          <img src="@/assets/image/phone.png" class='panel-img' alt="">
          手机号
          <div class='btn' @click="changeSetting('phone')">
            {{ user.phone? '更换绑定':'去绑定'}}
            <img src="@/assets/image/more.png" class='more-img' alt="">
          </div>
        </div>
        <div v-if='!user.phone' class="status">未设置</div>
        <div v-else class="status">{{ user.phone }}</div>
      </div>
    </div>
    <div class="panel-row">
      <div class="panel panel-3">
        <div class="panel-title">
          <img src="@/assets/image/email.png" class='panel-img' alt="">
          邮箱号
          <div class='btn' @click="changeSetting('email')"> {{ user.email? '更换绑定':'去绑定'}}
            <img src="@/assets/image/more.png" class='more-img' alt="">
          </div>
        </div>
        <div v-if='!user.email' class="status">未设置</div>
        <div v-else class="status">{{ user.email }}</div>
      </div>
    </div>

    <AccountSettingPopup ref='SettingPopup'></AccountSettingPopup>
  </div>
</template>

<script>
import AccountSettingPopup from '../../components/AccountSettingPopup'

export default {
  name: 'mine-setting',
  components: {
    AccountSettingPopup
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    changeSetting(type) {
      this.$refs.SettingPopup.show(type)
    }
  }
}
</script>

<style lang="less" scoped>
.user-settting{
  padding:40px 25px;
}
.panel-row{
  display: flex;
  .panel{
    width:467px;
    padding:20px 33px 24px 20px;
    box-sizing: border-box;
    background: #F9F9F9;
    border: 1px solid #F2F2F2;
    border-radius: 8px;
    color:#333333;
    font-size: 18px;
    line-height: 18px;
    .panel-img{
      width:28px;
      height: 28px;
      margin-right:10px;
    }
    .panel-title{
      display: flex;
      align-items: center;
      .btn{
        display: flex;
        align-items: center;
        margin-left:auto;
        color:@orange;
        cursor: pointer;
      }
      .more-img{
        margin-left:5px;
      }
    }
    .status{
      line-height: 16px;
      margin:18px 0 0 39px;
      color:#666666;
    }
  }
  .panel+.panel{
    margin-left:25px;
  }
}
.panel-row + .panel-row{
  margin-top:20px;
}
</style>