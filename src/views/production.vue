<template>
  <div class='production-page'>
    <Header name='production'></Header>
    <div class='banner'></div>
    <div class="production-content">
      <div class="content-hint">
        {{$t('message.__WXTSYRHWTHYLXKFLXDH__')}}
        <span class='orange-mark pointer'
          @click="$goto('/information?tab=help')">{{$t('message.__BZZX__')}}</span>
      </div>
      <div class="panel">
        <template v-for='(item,index) in list'>
          <div class="product-row" :key='index'>
            <ProductItem :data='item[0]' :activeId='activeId' :selectedIds='selectedIds'
              @open='handleOpen(item[0],index)' @select='handleSelectProd(item[0])'></ProductItem>
            <ProductItem :data='item[1]' :activeId='activeId' :selectedIds='selectedIds'
              @open='handleOpen(item[1],index)' @select='handleSelectProd(item[1])'></ProductItem>
            <ProductItem :data='item[2]' :activeId='activeId' :selectedIds='selectedIds'
              @open='handleOpen(item[2],index)' @select='handleSelectProd(item[2])'></ProductItem>
          </div>
          <div :class="['product-detail-panel',activePanelKey==='panel'+index?'active':'']"
            :key="'panel'+index">
            <div class="title">
              {{ currentProduct.type && currentProduct.type.product_type_name || '' }}</div>
            <div class='detail-list'>
              <div
                :class="['detail-item', currentProduct.info.length<=2?'col-2':currentProduct.info.length===3?'col-3':'col-5']"
                v-for='(info,i) in currentProduct.info' :key="i">
                <div class="item-title">
                  <img :src="info.img" alt="" class='info-img'> {{ info.title }}
                </div>
                <div class="item-content">{{ info.info }}</div>
                <div class="split-line" v-show='i !== infoLength-1 && (i+1)%5!==0'></div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class='operate-area' v-show='list && list.length!=0'>
        <a-checkbox v-model="selectAll" @change='handleSelectAll'>全选</a-checkbox>
        <a-button type='primary' @click="submit">{{$t('message.__TJDD__')}}
        </a-button>
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
import { getProductList } from '../api/index'

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
      allIds: [],
      selectedIds: [],
      activeId: undefined, // 当前点击的 product id
      activePanelKey: undefined, // 当前展开的详情 panel key
      open: false,
      total: 0,
      list: [],
      currentProduct: {},
      infoLength: 0
    }
  },
  created() {
    this.render()
  },
  methods: {
    render() {
      getProductList().then(res => {
        const list = res.data || []
        this.total = list.length

        const renderList = []
        let arr = []
        const allIds = []
        list.forEach((item, index) => {
          allIds.push(item.id)
          arr.push(item)
          if ((index + 1) % 3 !== 0) {
            return
          }
          renderList.push(arr)
          arr = []
        })
        this.list = renderList
        this.allIds = allIds
      }).catch(err => {
        this.$message.error(err)
      })
    },
    submit() {
      if (this.selectedIds.length < this.total) {
        this.$message.error('请选择所有产品！')
        return
      }
      if (this.$store.state.user.id) {
        this.$router.push({ name: 'orderDetail', query: { ids: this.allIds.join(',') } })
      } else {
        this.$message.error('请先登录！')
        this.$router.push('/login')
      }
    },
    // 展开、折叠详情
    handleOpen(data, index) {
      const id = data.id
      if (id === this.activeId) {
        this.open = false
        this.activeId = undefined
        this.activePanelKey = undefined
        this.currentProduct = {}
        return
      }
      this.open = true

      this.infoLength = data.info.length
      this.currentProduct = data
      this.activeId = id
      this.activePanelKey = 'panel' + index
    },
    handleSelectAll() {
      if (!this.selectAll) {
        this.selectedIds.splice(0, this.selectedIds.length)
      } else {
        this.selectedIds.splice(0, this.selectedIds.length, ...this.allIds)
      }
    },
    // 选择产品
    handleSelectProd(item) {
      const id = item.id
      const i = this.selectedIds.indexOf(id)
      if (i > -1) {
        this.selectAll = false
        this.selectedIds.splice(i, 1)
      } else {
        this.selectedIds.push(id)
      }
      if (this.selectedIds.length === this.allIds.length) {
        this.selectAll = true
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
  margin:0 auto ;
  padding-bottom:227px;
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
  padding-right:11px;
  .ant-btn{
    font-size: 16px;
    margin-left: auto;
    padding:9px 25px 9px 27px;
    line-height: 12px;
  }
  .ant-checkbox-wrapper{
    margin:0 8px 0 17px;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    line-height: 32px;
  }

}
.product-detail-panel{
  overflow: hidden;
  border: 1px solid #EFEFEF;
  border-top: 1px solid #fff;
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
    margin:0 0 44px 31px;
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
    // justify-content: space-between;
    >.detail-item{
      position: relative;
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
        line-height: 24px;
        >.info-img{
          width:24px;
          height: 24px;
        }
      }
      .item-content{
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        line-height: 25px;
      }
    }
    .detail-item{
      &.col-2{
        width:50%
      }
      &.col-3{
        width: 33%;
      }
      &.col-5{
        width:20%;
      }
    }
    .split-line{
      position: absolute;
      right: 0;
      top:0;
      height: 41px;
      border-left:1px solid #DEDEDE;
    }
  }
}
// 1 50%
// 2 50%
// >=3 20%
</style>