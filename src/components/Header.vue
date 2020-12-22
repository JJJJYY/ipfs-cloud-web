<template>
  <header class='page-header'>
    <div class="header-content row-center">
      <div class="header-left row-center">
        <img  src="@/assets/image/logo.png"  @click="$goto('/')" class='logo pointer' alt="">
        <span class='page-title pointer' @click="$goto('/')">{{$t('message.__FBSCCYJCFWS__')}}</span>
        <div class="nav-area row-center">
          <div :class="['nav-item',name==='home'?'active':'']" @click="$goto('/')">{{$t('message.__SY__')}}</div>
          <div :class="['nav-item',name==='production'?'active':'']"  @click="$goto('/production')">{{$t('message.__CP__')}}</div>
          <div :class="['nav-item',name==='information'?'active':'']"  @click="$goto('/information')">{{$t('message.__ZX__')}}</div>
          <div :class="['nav-item',name==='business'?'active':'']" @click="$goto('/business')">{{$t('message.__SW__')}}</div>
        </div>
      </div>
      <div class="header-right row-center">
        <div class="header-button pointer" @click="$goto('/login')">{{$t('message.__DL__')}}</div>
        <div class="header-button primary pointer"  @click="$goto('/register')">{{$t('message.__ZC__')}}</div>
        <!-- <div class="user-name-select">
          <div class="name">150 2563 3652<a-icon type="down" class='down-icon'/></div>
        </div> -->
        <!-- <div class="user-name-select">
          <div class="name">150 2563 3652<a-icon type="down" class='down-icon'/></div>
        </div> -->

      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    }
  },
  data() {
    return {}
  },
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
  .down-icon{
    width:15px;
    height: 9px;
    font-size: 15px;
  }
}
</style>