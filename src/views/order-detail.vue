<template>
  <div class='order-detail-page'>
    <Header></Header>
    <div class="page-title">
      <span class='orange-mark pointer' @click="$goto('/production')">产品</span>
      > 订单详情
    </div>
    <div class='content-panel'>
      <div class="product-list">
        <div class="product-item" v-for='item in productList' :key='item.id'>
          <div class='cube name'>{{ item.type && item.type.product_type_name || '' }}</div>
          <div class='cube'>
            <span v-if='item.specs'>{{ item.specs }}</span>
            <span v-if='item.rate'>{{ item.rate }}</span>
          </div>
          <div class='cube'>
            <span v-if='item.price'>单价：{{ item.total_price }} 元</span>
          </div>
          <div class='cube'>
            <div class="amount-selector" v-if='item.price'>
              <span class='minus-btn' @click='handleReduce(item)'>
                <a-icon type="minus" />
              </span>
              <a-input v-model="item.amount" class='amount-input'
                @change='handleAmountChange(item)'>
              </a-input>
              <span class='plus-btn' @click='handleAdd(item)'>
                <a-icon type="plus" />
              </span>
            </div>
          </div>
          <div class='cube'>
            <div v-if='item.price'>
              小计：<span class='total-price orange-mark'>¥{{ item.total_price * item.amount  }}</span>
            </div>
          </div>
          <div class='cube delete-cube'>
            <span v-if='item.price' @click='handleDelete(item)'>删除</span>
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

        <!-- <div class='amount-selector'>
          <span class='minus-btn' @click='handleReduce'>
            <a-icon type="minus" />
          </span>
          <a-input v-model="amount"></a-input>
          <span class='plus-btn' @click='handleAdd'>
            <a-icon type="plus" />
          </span>
          集群
        </div> -->
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
  id: 'feeId',
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
      amount: 1,
      ids: undefined,
      productList: [],
      info: {
        express_name: undefined,
        express_mobile: undefined
      },
      totalFee: 0
    }
  },
  created() {
    const ids = this.$route.query.ids
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
        const list = (res.data || []).concat(DefaultProduct)
        this.productList = list.map(item => {
          item.amount = 1
          return item
        })
        this.computeTotalFee()
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
      const infoList = this.productList.filter(item => item.total_price).map(item => {
        return {
          id: item.id,
          quantity: item.amount
        }
      })
      this.loading = true
      addOrder({
        info: infoList,
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
    // 删除 某一个产品
    handleDelete(item) {
      if (this.productList.length === 2) {
        this.$message.error('至少要购买一个产品！')
        return
      }
      const list = []
      this.productList.forEach((prod, i) => {
        if (String(prod.id) !== String(item.id)) {
          list.push(prod)
        }
      })
      this.productList = list
      this.computeTotalFee()
    },
    // 计算总费用
    computeTotalFee() {
      let fee = 0
      this.productList.forEach(item => {
        if (item.total_price) {
          fee += item.total_price * Number(item.amount)
        }
      })
      this.totalFee = fee
    },
    // 减少
    handleReduce(item) {
      const val = Number(item.amount)
      if (val - 1 > 0) {
        item.amount = val - 1
      } else {
        this.$message.error('最低数量为 1 ~')
        item.amount = 1
      }
      this.computeTotalFee()
    },
    // 增加
    handleAdd(item) {
      if (item.stock && (Number(item.amount) + 1 > Number(item.stock))) {
        this.$message.error('数量超出范围 ~')
        item.amount = Number(item.stock)
      } else {
        item.amount = Number(item.amount) + 1
      }
      this.computeTotalFee()
    },
    // 输入数量
    handleAmountChange(item) {
      const val = item.amount
      if (!(/^[0-9]+$/.test(val))) {
        item.amount = val.slice(0, -1)
      }
      if (item.stock && (Number(val) > Number(item.stock))) {
        this.$message.error('数量超出范围 ~')
        item.amount = Number(item.stock)
        return
      }
      if (Number(val) > 10000000) {
        this.$message.error('数量超出范围 ~')
        item.amount = 10000000
      }
      if (Number(val) <= 0) {
        this.$message.error('最低数量为 1 ~')
        item.amount = 1
      }
      this.computeTotalFee()
    },
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
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .delete-cube{
      min-width:40px;
      flex:0.2;
      white-space: nowrap;
      color:#999999;
      cursor: pointer;
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
  background-color: #ECECEC;
  border: 1px solid #ECECEC;
  .address-panel{
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
.amount-selector {
  height: 100%;
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #666666;
  .amount-input{
    height: 29px;
    width: 55px;
  }
  .minus-btn{
    height: 29px;
    line-height: 29px;
    padding:0 8px;
    border:1px solid #CDCDCD;
    border-right: none;
    border-radius: 4px 0 0 4px;
    cursor: pointer;
    pointer-events: auto;
    opacity: 1;
  }
  .plus-btn{
    height: 29px;
    line-height: 29px;
    padding:0 8px;
    border:1px solid #CDCDCD;
    border-left: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    pointer-events: auto;
    opacity: 1;
  }
  // .minus-btn, .plus-btn{
  //   &.disable{
  //     cursor: none;
  //     opacity: 0.4;
  //     pointer-events: none;
  //   }
  // }
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