<template>
  <div class='information-page'>
    <Header name='information'></Header>

    <div class="banner">
      <div class="title">资讯</div>
      <div class="subtitle">公告、帮助中心</div>
    </div>
    <div class='tabs'>
      <div :class="['tab',activeTab==='notice'?'active':'']" @click="changeTab('notice')">
        <div class="title">公告</div>
        <div class="subtitle">最新信息公告</div>
      </div>
      <div :class="['tab',activeTab==='help'?'active':'']" @click="changeTab('help')">
        <div class="title">帮助</div>
        <div class="subtitle">帮助中心</div>
      </div>
    </div>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      activeTab: 'notice',
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.setTab(to)
    next()
  },
  mounted() {
    this.setTab(this.$route)
    document.getElementById('app').scrollTop = 0
  },
  methods: {
    // 高亮 tab
    setTab(route) {
      const path = route.path
      if (/^\/information\//.test(path)) {
        this.activeTab = path.replace('/information/', '')
      }
      if (path === '/information/detail') {
        this.activeTab = route.query.type || 'notice'
      }
    },
    // 点击切换 tab
    changeTab(tab) {
      this.activeTab = tab
      const path = '/information/' + tab
      if (path === this.$route.path) {
        return
      }
      this.$router.push('/information/' + tab)
    },
  }
}
</script>

<style lang="less" scoped>
.information-page{
  background-color: #F8F8F8;
}
.banner{
  width:100%;
  height: 220px;
  background-color: #36353E;
  text-align: center;
  padding-top:69px;
  >.title{
    font-size: 32px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 30px;
  }
  >.subtitle{
    font-size: 18px;
    color: #FFFFFF;
    line-height: 18px;
    margin-top:32px;
  }
}
.tabs{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;
  padding-top:20px;
  margin-bottom:16px;
  >.tab{
    width:217px;
    display: flex;
    align-items: center;
    padding:19px 22px 22px;
    background: #FFFFFF;
    border-radius: 8px;
    cursor: pointer;
    border:1px solid transparent;
    &.active{
      border:1px solid @orange;
    }
    >.title{
      font-size: 20px;
      line-height: 20px;
      font-weight: 500;
    }
    >.subtitle{
      font-size: 16px;
      line-height: 16px;
      color: #333333;
      padding-left:14px;
      border-left: 1px solid #E9E9E9;
      margin-left:16px;
    }
  }
  .tab + .tab{
    margin-left:18px;
  }
}
</style>