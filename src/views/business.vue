<template>
  <div class='business-page' ref='businessPage'>
    <Header name='business'></Header>

    <div class="banner">商 务 合 作</div>
    <div class="content-area">
      <div class='h1'>合作介绍</div>
      <p class='p'>
        全球领先的矿机分时共享服务平台，具有一流的矿机供应、最优的套餐费用、矿池直接打款、服务周期灵活等优势。极大简化挖矿繁琐流程,省去购买、安装、运营矿机等过程。帮助用户迅速开始挖矿。致力于为全球用户提供更高效、便捷的矿机共享服务。上线以来，快速收获了全球用户喜爱和认可，用户数不断攀升的同时，更积累了高消费能力的用户群体，迅速达到行业领先地位。
      </p>

      <div class="h1">合作方式</div>
      <div class="h2">一、渠道推广合作</div>
      <div class="h3">合作对象: </div>
      <p>例如但不限于矿池、交易所、钱包、媒体、社群论坛、社交媒体、互联网金融平台、广告联盟等平台方。</p>
      <div class="h3">返佣方式:</div>
      <p>1、返佣比例超高订单返还比例高，等级越高，返还越多</p>
      <p>2、180天超长关联新客注册成功即建立180天关联</p>

      <div class="h2">二、推广流程</div>
      <div class="h3">1、加入推荐体系</div>
      <p>注册账号，完成个人实名认证</p>

      <div class="h3">2、分享推广</div>
      <div class="h4">合作方式:</div>
      <p>以CPS广告导流为主，渠道合作伙伴提供广告位，向IPFSCloud官网 或活动页导流。</p>
      <p>线上代理: 销售代理在自己的站点售卖IPFSCloud的产品，IPFSCloud将 提供强大的技术支持服务，帮助代理商快速搭建分销站，轻松获得分销回报。</p>
      <p>线下代理: 销售代理直接售卖IPFSCloud官网的商品，直接获得分销回报。</p>
      <p>销售代理直接售卖IPFSCloud官网的商品，直接获得分销回报。</p>

      <div class="h3">3、新客注册下单</div>
      <p>新客登入推广页面，180天内下单即返现</p>

      <div class='h3'>4、次月发放奖励</div>
      <p class='p'>推广成功，次月即发放奖励</p>

      <div class="h1">可通过以下方式接洽商务人员</div>
      <p class='p1'>邮箱：235922345@qq.com</p>
      <p class='p1'>二维码：</p>
      <img src="" class='qrcode' alt="">

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'business',
  components: {
    Header,
    Footer,
  },
  mounted() {
    document.getElementById('app').scrollTop = 0
  }
}
</script>

<style lang="less" scoped>
.banner{
  height: 220px;
  width: 100%;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  line-height: 220px;
  background-color: #000000;
  color:#fff
}

.content-area{
  width:1200px;
  margin:0 auto;
  padding:48px 0 225px;
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  line-height: 29px;
  .h1{
    margin-bottom:34px;
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
    padding-left:9px;
    line-height: 28px;
    border-left:4px solid @orange;
  }
  .p + .h1{
    margin-top:59px;
  }
  .h2{
    margin:41px 0 34px;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    line-height: 29px;
  }
  .h3{
    margin:32px 0 13px;
    font-size: 18px;
    line-height: 18px;
    font-weight: 500;
  }
  .h4{
    margin:18px 0 16px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
  }
  .p1{
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    color: #333333;
  }
  .qrcode{
    width:98px;
    height: 98px;
  }

}
</style>