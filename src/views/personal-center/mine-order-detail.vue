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
          <span class='value'>{{ user.express_name }}</span>
          <span class='label label-2'>电话：</span>
          <span class='value'>{{ user.express_mobile }}</span>
        </div>
      </div>
      <div class='order-info'>
        <div class="info-item">
          <span class="label">订单状态：</span>
          <span
            class="value">{{ detail.status==0?'已取消':detail.status==1?'已下单':detail.status == 2 ?'已完成':'' }}
          </span>
        </div>
        <div class="info-item">
          <span class="label">订单号：</span>
          <span class="value">{{ detail.order_code }}</span>
        </div>
        <!-- <div class="info-item">
          <span class="label">产品名称：</span>
          <span class="value">{{ detail.group && detail.group.product_group_name || '' }}</span>
        </div> -->
        <div class="info-item">
          <span class="label">创建时间：</span>
          <span class="value">{{detail.created_at }}</span>
        </div>
        <div class="info-item" v-if='detail.status == 2 '>
          <span class="label">完成时间：</span>
          <span class="value">{{ detail.pay_time }}</span>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item" v-for='(item,index) in detail.info || []' :key='index'>
          <div class='cube name'>{{ item.product_name }}</div>
          <div class='cube specs'>{{ item.specs }}</div>
          <div class='cube'>单价：{{ item.total_price }} 元</div>
          <div class='cube'>数量：{{ item.quantity }}</div>
          <div class='cube' v-show='detail.status ==2'>
            折扣：{{ item.discount }}
          </div>
          <div class='cube'>小计：<span class='total-price orange-mark'>¥{{ item.total_amount }}</span>
          </div>
        </div>
        <div class="product-item">
          <div class='cube name'>技术服务费</div>
          <div class='cube'>{{ Number(detail.service_fee || 0) * 100}}%/年</div>
          <div class='cube'></div>
          <div class='cube'></div>
          <div class='cube' v-show='detail.status ==2'></div>
          <div class='cube'></div>
        </div>
        <!-- <div class="product-item" v-if='Number(detail.discount)!=1'>
          <div class='cube name'>专享折扣</div>
          <div class='cube'>{{ detail.discount && Number(detail.discount)*10 }}折</div>
          <div class='cube'></div>
          <div class='cube'></div>
          <div class='cube'></div>
        </div> -->
      </div>

      <div class='fee-info'>
        <div class="total">总共配置费用：<span class='unit orange-mark'>¥</span><span
            class='number orange-mark'>{{ detail.total_amount }}</span></div>
        <div class='hint'>已下单，请稍等，平台客户将主动联系您</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import { getOrderDetail } from '../../api/index'

export default {
  name: 'mine-order-detail',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      user: {
        express_name: undefined,
        express_mobile: undefined
      },
      detail: {},
      id: undefined
    }
  },
  created() {
    const id = this.$route.query.id
    if (!id) {
      this.$router.go(-1)
      return
    }
    this.id = id
    this.render()
  },
  methods: {
    render() {
      getOrderDetail({
        id: this.id
      }).then(res => {
        const data = res.data || {}
        this.user = data.express || {}
        this.detail = data
      })
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
    .cube{
      flex:1;
    }
    .cube.specs{
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding-right:10px;
    }
    .flex-6{
      flex:0.6;
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
  text-align: right;
  margin-top:23px;
  padding-right:41px;
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