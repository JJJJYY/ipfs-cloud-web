<template>
  <!-- 主页固定 联系我们 -->
  <div class='contact-us'>
    <div class="qrcode-panel">
      <img src="" class='qrcode-img' alt="">
      <div class='hint'>客服二维码</div>
      <div class="phone">150 8652 2535</div>
    </div>
    <div class="fixed-cube">
      <img src="@/assets/image/chat.png" class='chat-img' alt="">
      联系我们
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style lang="less" scoped>
.contact-us{
  position: fixed;
  right:15px;
  bottom:40px;
  display: flex;
  align-items: flex-end;
  color:#333;
  font-family: Source Han Sans CN;
  &:hover .qrcode-panel{
    display: block;
  }
  .fixed-cube{
    display: flex;
    writing-mode: vertical-rl;
    padding:22px 18px 19px 15px;
    background-color: #FFFFFF;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #333333;
    border: 1px solid rgba(201, 201, 201, 0.15);
    box-shadow: 0px 6px 10px 1px rgba(160, 160, 160, 0.1);
    border-radius: 4px;
    .chat-img{
      width:30px;
      height: 27px;
      margin-bottom:27px;
    }
  }
  .qrcode-panel{
    display: none;
    background-color: #FFFFFF;
    margin-right:7px;
    border: 1px solid rgba(201, 201, 201, 0.24);
    box-shadow: 0px 6px 10px 1px rgba(160, 160, 160, 0.1);
    border-radius: 4px;
    padding:37px 39px 49px 38px;
    text-align: center;
    .qrcode-img{
      width:96px;
      height: 96px;
    }
    .hint{
      font-size: 14px;
      font-weight: 500;
      margin:6px 0 30px;
    }
    .phone{
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>