<template>
  <div class='order-detail-page'>
    <Header></Header>
    <div class="page-title">
      <span class='orange-mark pointer' @click="$goto('/production')">产品</span>
      > 订单详情
    </div>
    <div class='content-panel'>
      <div class="product-list">
        <div class="product-item" v-for='(item,index) in productList' :key='index'>
          <div class='cube name'>{{ item.type && item.type.product_type_name || '' }}</div>
          <div class='cube'>
            <span v-if='item.specs'>{{ item.specs }}</span>
            <span v-if='item.rate'>{{ item.rate }}</span>
          </div>
          <div class='cube'>
            <span v-if='item.price'>单价：{{ item.price }}
              元/{{ item.type && item.type.unit || ''}}</span>
          </div>
          <div class='cube'>
            <span v-if='item.lowest_num'>数量：{{ item.lowest_num * amount }}
              {{ item.type && item.type.unit || ''}}</span>
          </div>
          <div class='cube'>
            <div v-if='item.price'>
              小计：<span
                class='total-price orange-mark'>¥{{ item.price * amount * item.lowest_num }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class='input-area'>
        <div class="address-panel">
          <div class="title">收货人信息<span class='orange-mark'>下单后平台客服将用此电话联系您，请认真填写</span></div>
          <div class='input-row'>
            <div class="label">姓名</div>
            <a-input v-model="info.express_name" allowClear :maxLength='20'></a-input>
            <div class="label label-2">电话</div>
            <a-input v-model="info.express_mobile" allowClear :maxLength='20'></a-input>
          </div>
        </div>

        <div class='amount-selector'>
          <span class='minus-btn' @click='handleReduce'>
            <a-icon type="minus" />
          </span>
          <a-input v-model="amount"></a-input>
          <span class='plus-btn' @click='handleAdd'>
            <a-icon type="plus" />
          </span>
          集群
        </div>
      </div>

      <div class="computed-row">
        <div class="total">总共配置费用：<span class='unit orange-mark'>¥</span><span
            class='number orange-mark'>{{ totalFee }}</span></div>
        <a-button type='primary' :loading='loading' @click='submit'>立即购买</a-button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { getSelectedProduct, addOrder } from '../api/index'

const DefaultProduct = [{
  type: {
    product_type_name: '技术服务费'
  },
  rate: '20%/年'
}]

export default {
  name: 'order-detail',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      loading: false,
      ids: undefined,
      amount: 1,
      productList: [],
      info: {
        express_name: undefined,
        express_mobile: undefined
      }
    }
  },
  computed: {
    totalFee() {
      let fee = 0
      this.productList.forEach(item => {
        if (item.price) {
          fee += item.price * item.lowest_num
        }
      })
      return fee * this.amount
    }
  },
  watch: {
    amount(val) {
      if (!(/^[0-9]+$/.test(val))) {
        this.amount = val.slice(0, -1)
      }
      if (Number(this.amount > 100000)) {
        this.amount = 100000
      }
    }
  },
  created() {
    const ids = this.$route.params.ids
    if (!ids) {
      this.$message.error('请先选择要购买的产品！')
      this.$router.push('/production')
      return
    }
    this.ids = ids
    this.render()
  },
  methods: {
    render() {
      getSelectedProduct({ ids: this.ids }).then(res => {
        this.productList = (res.data || []).concat(DefaultProduct)
      })
    },
    submit() {
      if (!this.amount) {
        this.$message.error('请输入购买的集群数量！')
        return
      }
      if (!this.info.express_name || !this.info.express_mobile) {
        this.$message.error('请输入收货人信息！')
        return
      }
      if (!(/^1[3456789]\d{9}$/.test(this.info.express_mobile))) {
        this.$message.error('手机号不合法！')
        return
      }
      this.loading = true
      addOrder({
        ids: this.ids,
        num: this.amount,
        ...this.info
      }).then(res => {
        this.loading = false
        this.$message.success('购买成功！')
        this.$router.push('/mine/order')
      }).catch(err => {
        this.loading = false
        this.$message.error(err || '购买失败，请稍后再试！')
      })
    },
    handleReduce() {
      if (this.amount - 1 > 0) {
        this.amount -= 1
      } else {
        this.amount = 1
      }
    },
    handleAdd() {
      this.amount += 1
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
    .cube{
      flex:1;
    }
    .cube.align-right{
      text-align: right;
    }
    .flex-75{
      flex:0.6;
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
.amount-selector{
  display: flex;
  white-space: nowrap;
  align-items: center;
  font-size: 18px;
  color: #666666;
  .minus-btn{
    height: 39px;
    line-height: 39px;
    padding:0 12px;
    border:1px solid #CDCDCD;
    border-right: none;
    cursor: pointer;
    border-radius: 4px 0 0 4px;
  }
  .plus-btn{
    height: 39px;
    line-height: 39px;
    padding:0 12px;
    border:1px solid #CDCDCD;
    border-left: none;
    margin-right: 17px;
    cursor: pointer;
    border-radius: 0 4px 4px 0;
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

<style lang="less" >
.amount-selector .ant-input{
  border-radius: 0;
  height: 39px;
  width: 97px;
  text-align: center;
}
</style>