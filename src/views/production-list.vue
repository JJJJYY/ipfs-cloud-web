<template>
  <div>
    <Header name='production'></Header>

    <div class="content-area">
      <div :class="['list-item',item.clickable ? 'pointer':'']" v-for='item in list'
        :key='item.name' @click='goto(item.url)'>
        <div class="name">{{ item.name }}
          <img src="@/assets/image/right-arrow.png" class='right-arrow' alt="">
        </div>
        <div class="info">{{ item.info }}</div>
        <img :src="item.img" alt="">
      </div>
    </div>

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
      list: [{
        name: 'IPFS',
        info: 'IPFS是Inter Planetary File System(星际文件系统)的缩写，是个典型的点对点分布式文件系统,旨在用同一一个文件系统连接所有的计算设备。提供高质量/安全/可用互联网加速服务，支持游戏，互联网应用等场景，加速互联网用户访问，降低传输时延，加速跨国音视频及文件传输速率。',
        img: require('../assets/image/production-1.png'),
        clickable: true,
        url: '/production'
      }, {
        name: 'GPU云服务器',
        info: 'GPU云服务器(GPU Cloud Computing, GPU)是提供GPU算力的弹性计算服务，具有超强的计算能力，服务于深度学习、科学计算、图形可视化、视频处理多种应用场景。',
        img: require('../assets/image/production-2.png'),
        clickable: false
      }, {
        name: '云虚拟主机',
        info: '虚拟主机是一种虚拟服务器。可以帮助您存储和托管您制作的网站内容，并将网站展示到互联网上。虚拟主机预装网站运行环境，可通过图形化控制面板管理，操作更简单。',
        img: require('../assets/image/production-3.png'),
        clickable: false
      }]
    }
  },
  methods: {
    goto(url) {
      if (!url) {
        return
      }
      this.$router.push(url)
    }
  }
}
</script>

<style lang="less" scoped>
.content-area{
  width:1200px;
  margin:0 auto;
  .list-item{
    margin:16px 0;
    position: relative;
    .name{
      position: absolute;
      top:44px;
      left:39px;
      z-index: 10;
      color:#FFFEFD;
      font-size: 36px;
      font-weight: 500;
      line-height: 28px;
      display: flex;
      align-items: center;
    }
    .right-arrow{
      margin-left:18px;
    }
    .info{
      max-width: 707px;
      position: absolute;
      top:108px;
      left:32px;
      z-index: 10;
      font-size: 16px;
      line-height: 32px;
      color:#EEEEEE;
    }
  }
}
</style>