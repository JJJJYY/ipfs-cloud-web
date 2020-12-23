<template>
<!-- 资讯相关列表 -->
  <div class='info-list'>
    <div class="info-item" v-for='(item,index) in list' :key='index'>
     <img src="" class='item-img' alt="" @click='viewDetail(item.id)'>
     <div class="item-content">
       <div class="title" @click='viewDetail(item.id)'>{{item.name}}</div>
       <div class="content">{{item.content}}</div>
       <div class="time">{{item.time}}</div>
     </div>
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
  },
  data() {
    return {
      list: [{
        id: 1,
        name: 'Filcoin主网上线的十件事',
        content: '他股市损失30万 合约交易却从未爆仓 背后的真相是他股市损失30万 合约交易却从未爆仓 背后的真相是...',
        time: '2020-02-01   19:20:20'
      }, {
        id: 2,
        name: 'Filcoin主网上线的十件事',
        content: '他股市损失30万 合约交易却从未爆仓 背后的真相是他股市损失30万 合约交易却从未爆仓 背后的真相是...',
        time: '2020-02-01   19:20:20'
      }, {
        id: 3,
       name: 'Filcoin主网上线的十件事',
        content: '他股市损失30万 合约交易却从未爆仓 背后的真相是他股市损失30万 合约交易却从未爆仓 背后的真相是...',
        time: '2020-02-01   19:20:20'
      }, {
        id: 4,
        name: 'Filcoin主网上线的十件事',
        content: '他股市损失30万 合约交易却从未爆仓 背后的真相是他股市损失30万 合约交易却从未爆仓 背后的真相是...',
        time: '2020-02-01   19:20:20'
      }]
    }
  },
  methods: {
     viewDetail(id) {
      this.$emit('viewDetail', id)
    }
  }
}
</script>

<style lang="less" scoped>
.info-list{
  width:1200px;
  margin:0 auto;
  background: #FFFFFF;
  border-radius: 8px;
  padding:8px 40px 200px 40px;
  margin-bottom:200px;
  >.info-item{
    height: 188px;
    border-bottom:1px solid #F4F4F4;
    display: flex;
    align-items: center;
    color: #333333;
    .item-img{
      width:262px;
      height: 138px;
      background-color: #6A6A6A;
      border-radius: 8px;
      margin-right: 36px;
      cursor: pointer;
    }
    .item-content{
      height: 138px;
      display: flex;
      flex-direction: column;
      >.title{
        font-size: 18px;
        line-height: 18px;
        font-weight: bold;
        margin-bottom:12px;
        cursor: pointer;
      }
      >.content{
        font-size: 16px;
        line-height: 22px;
      }
      >.time{
        margin-top:auto;
        font-size: 14px;
      }
    }
  }
}
</style>