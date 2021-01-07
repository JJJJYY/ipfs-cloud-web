<template>
  <div id="app">
    <keep-alive>
      <router-view v-if='$route.meta.keepAlive'></router-view>
    </keep-alive>

    <router-view v-if='!$route.meta.keepAlive'></router-view>
  </div>
</template>

<script>
import { getUserProfile } from './api/index'

export default {
  created() {
    getUserProfile().then(res => {
      const user = res.data || {}
      this.$store.commit('updateUser', user)
    })
  }
}
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: auto;
}
.row-center{
  display: flex;
  align-items: center;
}
.orange-mark{
  color:@orange;
}
.pointer{
  cursor: pointer;
}
</style>
