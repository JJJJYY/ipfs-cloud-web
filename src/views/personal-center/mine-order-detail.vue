<template>
  <div class='order-detail-page'>
    <Header></Header>
    <div class="page-title">
      <span class='orange-mark pointer' @click="$goto('/mine/order')">我的订单</span>
      > 订单详情
    </div>
    <div class='content-panel'>
      <div class="receive-info">
        <div class='title'>收货信息</div>
        <div class='content'>
          <span class='label'>姓名：</span>
          <span class='value'>{{user.name}}</span>
          <span class='label label-2'>电话：</span>
          <span class='value'>{{user.phone}}</span>
        </div>
      </div>
      <div class='order-info'>
        <div class="info-item">
          <span class="label">订单状态：</span>
          <span class="value">已支付 </span>
        </div>
        <div class="info-item">
          <span class="label">订单号：</span>
          <span class="value">1536481605665233</span>
        </div>
        <div class="info-item">
          <span class="label">产品名称：</span>
          <span class="value">分布式存储云</span>
        </div>
        <div class="info-item">
          <span class="label">创建时间：</span>
          <span class="value">2020-11-18  13:00:00</span>
        </div>
        <div class="info-item">
          <span class="label">完成时间：</span>
          <span class="value">2020-11-18  13:00:00</span>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item" v-for='(item,index) in productList' :key='index'>
          <div class='name'>{{item.name}}</div>
          <div>{{item.model}}</div>
          <div>{{item.price}}</div>
          <div>{{item.amount}}</div>
          <div>小计：<span class='total-price orange-mark'>¥{{item.total}}</span></div>
        </div>
        <div  class="product-item">
          <div class='name'>专享折扣</div>
          <div>9.5折</div>
        </div>
      </div>

      <div class='fee-info'>
        <div class="total">总共配置费用：<span class='unit orange-mark'>¥</span><span class='number orange-mark'>568000</span></div>
        <div class='hint'>已下单，请稍等，平台客户将主动联系您</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
 components: {
    Header,
    Footer,
  },
  data() {
    return {
      user: {
        name: '雷锋',
        phone: '135 4561 1236'
      },
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
  margin:32px auto 9px;
}
.content-panel{
  width:1200px;
  margin:0 auto 118px;
  border: 1px solid rgba(201, 201, 201, 0.24);
  border-radius: 8px;
  background: #FFFFFF;
}
.product-list{
  padding:0 41px;
  .product-item{
    display: flex;
    justify-content: space-between;
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
  .product-item + .product-item{
    border-top: 1px solid #F4F4F4;
  }
}
.receive-info{
  padding:30px 41px 28px;
  color: #333333;
  >.title{
    font-size: 16px;
    line-height: 16px;
    margin-bottom:21px;
  }
  >.content{
    font-size: 18px;
    color: #333333;
    .label-2{
      margin-left:49px;
    }
    .value{
      color: #666;
    }
  }
}
.order-info{
  background-color: #F8F8F8;
  padding:33px 41px 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  >.info-item{
    width:25%;
    margin-bottom:22px;
    font-size: 16px;
    line-height: 16px;
    color: #333333;
    >.value{
      color:#666666;
    }
  }
}
.fee-info{
  margin-left: 790px;
  margin-top:23px;
  padding-bottom:42px;
  .total{
    font-size: 18px;
    line-height: 24px;
    height: 24px;
    margin-bottom: 23px;
    color: #666666;
    >.number{
      font-size: 30px;
    }
    >.unit{
      font-size: 24px;
    }
  }
  >.hint{
    font-size: 14px;
    color: #666666;
  }
}
</style>