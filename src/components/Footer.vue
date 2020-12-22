<template>
  <footer class='page-footer'>
    <div class="footer-content">
      <div class="row">
        <div class="logo-area">
          <img src="@/assets/image/logo.png" class='logo' alt="">
          <div>分布式存储云基础服务商</div>
        </div>

        <div class="list-1 list">
          <div class="list-title">产品</div>
          <div class="list-item">seal</div>
          <div class="list-item">zk</div>
          <div class="list-item">存储</div>
          <div class="list-item">技术服务</div>
        </div>

        <div class="list-2 list">
          <div class="list-title">信息</div>
          <div class="list-item">关于我们</div>
          <div class="list-item">公告</div>
          <div class="list-item">资讯</div>
          <div class="list-item">帮助中心</div>
        </div>

        <div class="qrcode-area">
          <div class="qrcode-1">
            <img src=""  class='img' alt="">
            <div>客服微信</div>
          </div>
          <div class="qrcode-2">
            <img src=""  class='img' alt="">
            <div>微信公众号</div>
          </div>
        </div>

      </div>

      <div class="copyright">Copyright<a-icon class='copyright-icon' type="copyright" />2020 IPFS Cloud 深圳储算科技有限公司</div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.page-footer{
  background-color: #18171E;
  .footer-content{
    width:1200px;
    margin:0 auto;
    padding:58px 0 24px;
  }
  .row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-area{
      font-size: 16px;
      font-family: Source Han Sans CN;
      color:#fff;
      text-align: center;
      .logo{
        width:87px;
        height: 54px;
        margin-bottom:40px;
      }
    }
    .list{
      color: #FFFFFF;
      font-family: Source Han Sans CN;
      .list-title{
        font-size: 16px;
        font-weight: 500;
        margin-bottom:37px;
      }
      .list-item{
        font-size: 16px;
        font-weight: 400;
        color: #CDCDCD;
        cursor: pointer;
      }
      .list-item + .list-item{
        margin-top: 25px;
      }
    }
    .qrcode-area{
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 17px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #CDCDCD;
      .qrcode-1{
        margin-right:76px;
      }
      .img{
        width:86px;
        height: 86px;
        margin-bottom:15px;
      }
    }
  }
  .copyright{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:82px;
    text-align: center;
    font-size: 16px;
    line-height: 16px;
    font-family: Source Han Sans CN;
    color: #BABABA;
    .copyright-icon{
      margin:0 4px;
    }
  }
}
</style>