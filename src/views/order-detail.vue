<template>
  <div class='order-detail-page'>
    <Header></Header>
    <div class="page-title">
      <span class='orange-mark'>产品</span>
      > 订单详情
    </div>
    <div class='content-panel'>
      <div class="product-list">
        <div class="product-item" v-for='(item,index) in productList' :key='index'>
          <div class='name'>{{item.name}}</div>
          <div>{{item.model}}</div>
          <div>{{item.price}}</div>
          <div>{{item.amount}}</div>
          <div>小计：<span class='total-price orange-mark'>¥{{item.total}}</span></div>
        </div>
      </div>
      <div class='input-area'>
        <div class="address-panel">
          <div class="title">收货人信息<span class='orange-mark'>下单后平台客服将用此电话联系您，请认真填写</span></div>
          <div class='input-row'>
            <div class="label">姓名</div>
            <a-input allowClear></a-input>
            <div class="label label-2">电话</div>
            <a-input allowClear></a-input>
          </div>
        </div>

        <div class='amount-selector'>
          <a-input>
            <a-icon slot="addonBefore" type="minus" />
            <a-icon slot="addonAfter" type="plus" />
          </a-input>
          集群
        </div>
      </div>

      <div class="computed-row">
        <div class="total">总共配置费用：<span class='unit orange-mark'>¥</span><span class='number orange-mark'>568000</span></div>
        <a-button type='primary'>立即购买</a-button>
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
      productList: [{
        name: '分布式存储服务器',
        model: 'STC036（4U 36盘位 576T）',
        price: '单价：288000元/台',
        amount: '数量：1台',
        total: '288800'
      }, {
        name: '分布式存储服务器',
        model: 'STC036（4U 36盘位 576T）',
        price: '单价：288000元/台',
        amount: '数量：1台',
        total: '288800'
      }, {
        name: '分布式存储服务器',
        model: 'STC036（4U 36盘位 576T）',
        price: '单价：288000元/台',
        amount: '数量：1台',
        total: '288800'
      }, {
        name: '分布式存储服务器',
        model: 'STC036（4U 36盘位 576T）',
        price: '单价：288000元/台',
        amount: '数量：1台',
        total: '288800'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.order-detail-page{
  background-color: #FBFBFB;
}
.page-title{
  width:1200px;
  margin:32px auto 16px;
}
.content-panel{
  width:1200px;
  margin:0 auto 118px;
  border: 1px solid rgba(201, 201, 201, 0.24);
  border-radius: 8px;
  background: #FFFFFF;
  padding:0 41px 41px;
}
.product-list{
  .product-item{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #F4F4F4;
    height: 74px;
    line-height: 74px;
    font-size: 16px;
    color: #666666;
    >.name{
      color:#333333;
    }
    .total-price{
      font-size: 16px;
      font-weight: 500;
    }
  }
}
.input-area{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:56px 0 70px;
  .address-panel{
    background-color: #ECECEC;
    border: 1px solid #ECECEC;
    border-radius: 4px;
    padding:22px 150px 30px 27px;
    >.title{
      font-size: 16px;
      color: #333333;
      line-height: 32px;
      margin-bottom:38px;
      .orange-mark{
        margin-left:18px;
        font-size: 14px;
        color: #FF6A04;
      }
    }
    .input-row{
      display: flex;
      >.label{
        white-space: nowrap;
        margin-right: 16px;
        font-size: 14px;
        color: #333333;
        line-height: 32px;
      }
      .label-2{
        margin-left:47px;
      }
      .ant-input-affix-wrapper{
        width:184px;
      }
    }
  }
}
.computed-row{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .ant-btn{
    margin-left:155px;
    font-size: 16px;
    color: #FBFBFB;
    padding:9px 25px;
    line-height: 12px;
  }
  .total{
    font-size: 18px;
    color: #666666;
    >.number{
      font-size: 30px;
    }
    >.unit{
      font-size: 24px;
    }
  }
}
</style>