<template>
  <div class='home-page'>
    <Header name='home'></Header>
    <div class="banner">共 享 储 存 分 享 价 值</div>
    <div class="hint hint-1">短时间/获取有效存储算力</div>
    <div class="button">
      <span class='btn'>一键开启</span>
    </div>
    <div class="split-line"></div>

    <div class="area-1">
      <div class="area-title">轻松挖矿</div>
      <div class="hint hint-2">轻松获取有效存储算力，键化繁琐的步骤，直接开启存储算力</div>

      <div class="cube-row">
        <div>
          <img src="@/assets/image/home-cube1.png" class='cube-img' alt="">
          <div class="label">用户购买服务</div>
        </div>
        <div>
          <img src="@/assets/image/home-cube2.png" class='cube-img' alt="">
          <div class="label">底单排期</div>
        </div>
        <div>
          <img src="@/assets/image/home-cube3.png" class='cube-img' alt="">
          <div class="label">服务开启</div>
        </div>
        <div>
          <img src="@/assets/image/home-cube4.png" class='cube-img' alt="">
          <div class="label">稳定服务</div>
        </div>
      </div>
    </div>

    <div class="area-2">
      <div class="area-title">核心产品</div>
      <div class="row-1 panel-row">
        <div class="panel panel-1">
          <div class="panel-title">MineOS</div>
          <div class="panel-info">为IPFS深度定制Linux内核及分布式文件系统IPFS硬件全方位智能管家，稳定、强劲、高效，分布式存储&边缘计算，均可轻松胜任.
          </div>
        </div>
        <div class="panel panel-2">
          <div class="panel-title">蜘蛛服务器</div>
          <div class="panel-info">专为IPFS深度定制的分布式存储服务器开发测试网算力第一节点专用硬件，高速数据封存，出块.事行业领先.</div>
        </div>
      </div>
      <div class="row-2 panel-row">
        <div class="panel panel-3">
          <div class="panel-title">FilPool矿池</div>
          <div class="panel-info">专业 Filecoin 矿池，采用时空云科技 IPFS 深度定制的“蜘蛛服务器”及分布式存储“MineOS”
            系统，高效稳定，安全有保障
          </div>
        </div>
        <div class="panel panel-4">
          <div class="panel-title">矩阵边缘存储器托管服务</div>
          <div class="panel-info">专业机房、万兆光纤宽带、24小时专人维护、raid阵列升级、持续固件更新..</div>
        </div>
      </div>
    </div>

    <div class="area-3">
      <div class="area-content">
        IPFS
        Cloud,储算科技倾力打造的云存储品牌，面向全世界客户，提供全球领先的算力、存储等技术软硬产品与服务，以卓越的科技能力打造丰富的解决方案，构建开放共贏的云存储平台，致力于成为下一代分布式网络运营商。
      </div>
    </div>

    <div class="area-4">
      <div class="area-title">合作伙伴</div>
    </div>

    <Footer></Footer>

    <ContactUs></ContactUs>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ContactUs from '../components/ContactUs'

export default {
  components: {
    Header,
    Footer,
    ContactUs
  }

}
</script>

<style lang="less" scoped>
.home-page{
  color:#333;
}
.banner{
  width:100%;
  height: 580px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#fff;
  font-size: 56px;
  font-family: Source Han Sans CN;
}
.hint{
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  &.hint-1{
    margin:33px 0 37px;
  }
  &.hint-2{
    font-size: 16px;
    margin-bottom: 39px;
  }
}
.button{
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: @orange;
  line-height: 20px;
  text-align: center;
  .btn{
    cursor: pointer;
  }
}
.split-line{
  margin:36px 0 54px;
  border-top: 1px solid #F3F3F3;
}
.area-1{
  .area-title{
    font-size: 30px;
    font-weight: bold;
    color: #333333;
    text-align: center;
    margin-bottom:15px;
  }
}
.cube-row{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:1200px;
  margin:0 auto;
  padding-bottom:115px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  text-align: center;
  .cube-img{
    width:266px;
    height: 266px;
    margin-bottom:20px;
  }
}
.area-2{
  background-color: #F9F9F9;
  padding:81px 0 140px;
  .area-title{
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    margin-bottom:68px;
    text-align: center;
  }
  .panel-row{
    width:1200px;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .panel{
      width:589px;
      height: 224px;
      padding:31px 0 0 37px;
      box-sizing: border-box;
      .panel-title{
        margin-bottom:22px;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: bold;
      }
      .panel-info{
        width:365px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        line-height: 32px;
      }
      &.panel-1{
        background: url('../assets/image/home-cube5.png') no-repeat right bottom;
        background-color: #fff;
      }
      &.panel-2{
        background: url('../assets/image/home-cube6.png') no-repeat right bottom;
        background-color: #fff;
      }
       &.panel-3{
        background: url('../assets/image/home-cube7.png') no-repeat right bottom;
        background-color: #fff;
      }
       &.panel-4{
        background: url('../assets/image/home-cube8.png') no-repeat right bottom;
        background-color: #fff;
      }

    }
  }
  .row-1{
    margin-bottom:44px;
  }
}
.area-3{
  height: 362px;
  background-image: url('../assets/image/home-bg.png');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .area-content{
    width:768px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 32px;
  }
}
.area-4{
  padding:70px 0;
  .area-title{
    font-size: 30px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    line-height: 32px;
    text-align: center;
  }
}
</style>