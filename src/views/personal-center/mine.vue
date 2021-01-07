<template>
  <div class="mine-page">
    <Header></Header>
    <div class="mine-content">
      <div class="fixed-cube">
        <div class="user-info-cube cube">
          <div class="user-avatar">
            <a-avatar :size="64" icon="user" />
          </div>
          <span class="user-rank">普通会员</span>
          <div class="phone">{{ user.user_name }}</div>
          <div class="uid">UID：{{ user.id }} </div>
        </div>
        <div class="nav-cube cube">
          <!-- <div class="nav-item" @click="$goto('/mine/assets')">
            <img v-if="activeKey==='/mine/assets'" src="@/assets/image/assets-active.png" class='nav-img' alt="">
            <img v-else src="@/assets/image/assets.png" class='nav-img' alt="">
            资金管理
          </div> -->
          <div :class="['nav-item',activeKey==='order'?'active':'']" @click="$goto('/mine/order')">
            <img v-if="activeKey==='order'" src="@/assets/image/order-active.png" class='nav-img'
              alt="">
            <img v-else src="@/assets/image/order.png" class='nav-img' alt="">
            我的订单
          </div>
          <div :class="['nav-item',activeKey==='setting'?'active':'']"
            @click="$goto('/mine/setting')">
            <img v-if="activeKey==='setting'" src="@/assets/image/account-active.png"
              class='nav-img' alt="">
            <img v-else src="@/assets/image/account.png" class='nav-img' alt="">
            账号设置
          </div>
        </div>
      </div>
      <div class="content-cube cube">
        <keep-alive>
          <router-view v-if='$route.meta.keepAlive'></router-view>
        </keep-alive>

        <router-view v-if='!$route.meta.keepAlive'></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: 'mine',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      activeKey: ''
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  created() {
    this.activeKey = this.$route.path.replace('/mine/', '')
  },
  beforeRouteUpdate(to, from, next) {
    const path = to.path
    if (/^\/mine\//.test(path)) {
      this.activeKey = path.replace('/mine/', '')
    }
    next()
  },
}
</script>

<style lang="less" scoped>
.mine-page{
  color: #333333;
  font-family: Source Han Sans CN;
  background-color: #FBFBFB;
}
.mine-content{
  width: 1200px;
  margin:18px auto 24px;
  display: flex;
  .fixed-cube{
    width:184px;
    margin-right:9px;
  }
  .user-info-cube{
    width:184px;
    padding:34px 12px 26px;
    box-sizing: border-box;
    text-align: center;
    .ant-avatar{
      margin-bottom:8px;
    }
    .user-rank{
      font-size: 14px;
      line-height: 14px;
      font-weight: 400;
      padding:5px 13px 5px 13px;
      background: #EFEFEF;
      border-radius: 12px;
    }
    .phone{
      font-size: 16px;
      line-height: 14px;
      margin:27px 0 15px;
      line-height: 20px;
      word-break: break-all;
    }
    .uid{
      font-size: 16px;
      line-height: 14px;
    }
  }
  .nav-cube{
    min-height: 470px;
    margin-top:8px;
    padding:0 12px 0 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    .nav-item{
      display: flex;
      align-items: center;
      padding:26px 0 20px 18px;
      cursor: pointer;
      .nav-img{
        margin-right: 18px;
      }
      &.active{
        color:@orange;
      }
    }
    .nav-item+.nav-item{
      border-top: 1px solid #F7F7F7;
    }
  }
  .content-cube{
    flex:1;
  }
}
.cube{
  background: #FFFFFF;
  border: 1px solid rgba(201, 201, 201, 0.24);
  box-shadow: 0px 8px 15px 1px rgba(160, 160, 160, 0.06);
  border-radius: 8px;
}
</style>