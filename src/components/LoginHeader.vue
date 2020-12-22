<template>
  <div class='login-header'>
    <div class="header-content">
      <img  @click="$goto('/')" src="@/assets/image/logo.png" class='logo pointer' alt="">
      <span class='pointer' @click="$goto('/')">{{$t('message.__FBSCCYJCFWS__')}}</span>
      <span class='split-line'>|</span>
      <span class='type'>{{ $t(type) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
.login-header{
  background-color: #fff;
}
.header-content{
  display: flex;
  align-items: center;
  width:1200px;
  height: 64px;
  margin:0 auto;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #333333;
  line-height: 32px;
  .logo{
    width:50px;
    height: 31px;
    margin-right:12px;
  }
  .split-line{
    margin:0 21px 0 23px;
  }
  .type{
    font-weight: 400;
  }
}
</style>