<template>
  <div class='production-page'>
    <Header name='production'></Header>
    <div class='banner'></div>
    <div class="production-content">
      <div class="content-hint">
        {{$t('message.__WXTSYRHWTHYLXKFLXDH__')}}
        <span class='orange-mark pointer' @click="$goto('/information?tab=help')">{{$t('message.__BZZX__')}}</span>
      </div>
      <div class="panel">
        <div class="product-row">
          <ProductItem id='1' :activeId='activeId' :selectAll='selectAll' @open='handleOpen' @select='handleSelectProd'></ProductItem>
          <ProductItem id='2' :activeId='activeId' :selectAll='selectAll'  @open='handleOpen'  @select='handleSelectProd'></ProductItem>
          <ProductItem id='3' :activeId='activeId' :selectAll='selectAll' @open='handleOpen'  @select='handleSelectProd'></ProductItem>
        </div>
        <div :class="['product-detail-panel',open?'active':'']">
          <div class="title">{{'分布式存储服务器'}}</div>
          <div class='detail-list'>
            <div class="detail-item">
              <div class="item-title"><a-icon type="up-circle" />容量</div>
              <div class="item-content">稳定高容量，有多种容量可选</div>
            </div>
            <div class="detail-item">
              <div class="item-title"><a-icon type="up-circle" />容量</div>
              <div class="item-content">稳定高容量，有多种容量可选</div>
            </div>
            <div class="detail-item">
              <div class="item-title"><a-icon type="up-circle" />容量</div>
              <div class="item-content">稳定高容量，有多种容量可选</div>
            </div>
            <div class="detail-item">
              <div class="item-title"><a-icon type="up-circle" />容量</div>
              <div class="item-content">稳定高容量，有多种容量可选</div>
            </div>
            <div class="detail-item">
              <div class="item-title"><a-icon type="up-circle" />容量</div>
              <div class="item-content">稳定高容量，有多种容量可选</div>
            </div>
            <div class="detail-item">
              <div class="item-title"><a-icon type="up-circle" />容量</div>
              <div class="item-content">稳定高容量，有多种容量可选</div>
            </div>
          </div>
        </div>
        <div class="product-row">
          <ProductItem id='4' :activeId='activeId' :selectAll='selectAll' direction='top' @open='handleOpen' @select='handleSelectProd'></ProductItem>
          <ProductItem id='5' :activeId='activeId' :selectAll='selectAll' direction='top' @open='handleOpen' @select='handleSelectProd'></ProductItem>
        </div>
      </div>
      <div class='operate-area'>
        <a-checkbox v-model="selectAll" @change='handleSelectAll'></a-checkbox>
        全选
        <a-button type='primary' @click="$goto('/orderDetail')">{{$t('message.__TJDD__')}}</a-button>
      </div>
    </div>

    <Footer></Footer>
    <ContactUs></ContactUs>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ContactUs from '../components/ContactUs'
import ProductItem from '../components/ProductItem'

export default {
 components: {
    Header,
    Footer,
    ContactUs,
    ProductItem
  },
  data() {
    return {
      selectAll: false,
      selectedIds: [],
      activeId: undefined,
      open: false
    }
  },
  methods: {
    // 展开、折叠详情
    handleOpen(id) {
      if (id === this.activeId) {
        this.open = false
        this.activeId = undefined
        return
      }
      this.open = true
      this.activeId = id
    },
    handleSelectAll() {
      if (!this.selectAll) {
        this.selectedIds = []
      }
    },
    // 选择产品
    handleSelectProd(id) {
      const i = this.selectedIds.indexOf(id)
      if (i > -1) {
        this.selectedIds.splice(i, 1)
      } else {
        this.selectedIds.push(id)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.production-page{
  background-color: #FBFBFB;
}
.banner{
  width:100%;
  height: 320px;
  background: url('../assets/image/production-banner.png') center no-repeat;
  background-size: cover;
}
.production-content{
  width: 1200px;
  margin:0 auto;
  .content-hint{
    margin:21px 0 38px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 400;
    color: #151420;
    line-height: 18px;
  }
}
.panel{
  background: #FFFFFF;
  border: 1px solid rgba(201, 201, 201, 0.24);
  box-shadow: 0px 14px 13px 3px rgba(168, 168, 168, 0.06);
  border-radius: 8px;
  margin-bottom:35px;
}
.product-row{
  display: flex;
  flex:3;
  .product-item{
    width: 33.3%;
  }
  .product-item:nth-child(1),.product-item:nth-child(2){
    border-right:1px solid #F7F7F7;
  }
}
.operate-area{
  display: flex;
  align-items: center;
  margin-bottom:227px;
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  line-height: 32px;
  padding-right:11px;
  .ant-btn{
    font-size: 16px;
    margin-left: auto;
    padding:9px 25px 9px 27px;
    line-height: 12px;
  }
  .ant-checkbox-wrapper{
    margin:0 8px 0 17px;
  }
}
.product-detail-panel{
  overflow: hidden;
  border: 1px solid #EFEFEF;
  border-bottom: 1px solid #fff;
  background-color: #ECECEC;
  height: 0;
  padding-top:0;
  transition: all 300ms;
  &.active{
    padding-top:25px;
    height: auto;
    border: 1px solid #ECECEC;
  }
  >.title{
    margin:0 0 45px 31px;
    line-height: 20px;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    padding-left:13px;
    border-left:3px solid @orange;
  }
  .detail-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    >.detail-item{
      width:19%;
      margin-bottom:35px;
      padding:0 40px;
      box-sizing: border-box;
      .anticon{
        width:24px;
        height: 24px;
        color:@orange;
        margin-right: 5px;
      }
      .item-title{
        margin-bottom:16px;
        font-size: 18px;
        font-weight: 500;
        color: #333333;
      }
      .item-content{
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        line-height: 25px;
      }
    }
  }
}
// 1 50%
// 2 50%
// >=3 20%
</style>