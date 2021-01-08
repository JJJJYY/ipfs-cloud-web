<template>
  <header class='page-header'>
    <div class="header-content row-center">
      <div class="header-left row-center">
        <img src="@/assets/image/logo.png" @click="$goto('/')" class='logo pointer' alt="">
        <span class='page-title pointer'
          @click="$goto('/')">{{$t('message.__FBSCCYJCFWS__')}}</span>
        <div class="nav-area row-center">
          <div :class="['nav-item',name==='home'?'active':'']" @click="$goto('/')">
            {{$t('message.__SY__')}}</div>
          <div :class="['nav-item',name==='production'?'active':'']" @click="$goto('/production')">
            {{$t('message.__CP__')}}</div>
          <div :class="['nav-item',name==='information'?'active':'']"
            @click="$goto('/information')">{{$t('message.__ZX__')}}</div>
          <div :class="['nav-item',name==='business'?'active':'']" @click="$goto('/business')">
            {{$t('message.__SW__')}}</div>
        </div>
      </div>
      <div class="header-right row-center">
        <div v-show='!user.id' class="header-button pointer" @click="$goto('/login')">
          {{$t('message.__DL__')}}</div>
        <div v-show='!user.id' class="header-button primary pointer" @click="$goto('/register')">
          {{$t('message.__ZC__')}}</div>

        <div class="user-name-select" v-show='user.id'>
          <div class="name">{{ user.user_name }}
            <a-icon type="down" class='down-icon' />
          </div>
          <div class='select-panel'>
            <div class='select-item item-1' @click="$goto('/mine')">个人中心</div>
            <div class='select-item' @click='logout'>退出登录</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { logout } from '../api'

export default {
  name: 'Header',
  props: {
    name: {
      type: String,
      default: null
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  data() {
    return {}
  },
  methods: {
    logout() {
      this.$store.commit('updateUser', {})
      logout().then(res => {
        this.$message.success('退出登录成功！')
        localStorage.removeItem('token')
        this.$router.replace('/')
      }).catch(err => {
        this.$message.error(err || '操作失败，请稍后再试！')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.page-header{
  width:100%;
  height: 63px;
  background-color: #2C2F3E;
  color:#FFFFFF;
  font-size: 16px;
  font-size: SourceHanSansCN-Regular;
  .header-content{
    width:1200px;
    height: 100%;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    .logo{
      width:50px;
      height: 31px;
    }
  }
  .page-title{
    margin: 0 91px 0 16px;
  }
  .nav-area{
    .nav-item{
      cursor: pointer;
      &.active{
        color:@orange;
      }
    }
    .nav-item + .nav-item{
      margin-left:60px;
    }
  }
  .header-button{
    height: 28px;
    line-height: 28px;
    font-size: 16px;
    font-weight: 500;
    color:#333;
    padding:0 27px;
    background-color: #FFFFFF;
    border-radius: 4px;
    &.primary{
      color:#fff;
      background-color: @orange;
    }
  }
  .header-button + .header-button{
    margin-left:22px;
  }
}
.user-name-select{
  position: relative;
  &:hover{
    .select-panel{
      display: block;
    }
  }
  >.name{
    font-size: 16px;
    line-height: 14px;
    color: #FFFFFF;
    padding:10px 0;
  }
  .down-icon{
    width:15px;
    height: 9px;
    font-size: 15px;
    margin-left: 9px;
  }
  .select-panel{
    z-index:100;
    display: none;
    position: absolute;
    width:100%;
    background-color: #fff;
    border-radius: 4px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    color: #333333;
    text-align: center;
    padding:15px 0 18px;
    .select-item{
      cursor: pointer;
    }
    .item-1{
      margin-bottom:16px;
    }
  }
}
</style>