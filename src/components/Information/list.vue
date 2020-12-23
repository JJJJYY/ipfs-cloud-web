<template>
<!-- 资讯相关列表 -->
  <div class='notice-list'>
    <div class="notice-item" v-for='(item,index) in list' :key='index' @click='viewDetail(item.id)'>
      <span class='orange-cube'></span>
      <div class="name">{{item.name}}</div>
      <div class="time">{{item.time}}</div>
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
        name: '他股市损失30万 合约交易却从未爆仓 ...',
        time: '2020-02-25'
      }, {
        id: 2,
        name: '他股市损失30万 合约交易却从未爆仓 ...',
        time: '2020-02-25'
      }, {
        id: 3,
        name: '他股市损失30万 合约交易却从未爆仓 ...',
        time: '2020-02-25'
      }, {
        id: 4,
        name: '他股市损失30万 合约交易却从未爆仓 ...',
        time: '2020-02-25'
      }, {
        id: 5,
        name: '他股市损失30万 合约交易却从未爆仓 ...',
        time: '2020-02-25'
      }, {
        id: 6,
        name: '他股市损失30万 合约交易却从未爆仓 ...',
        time: '2020-02-25'
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
.notice-list{
  width:1200px;
  margin:0 auto;
  background: #FFFFFF;
  border-radius: 8px;
  padding:42px 59px 200px 42px;
  margin-bottom:200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .notice-item{
    width:45%;
    display: flex;
    align-items: center;
    border-bottom:1px solid #F4F4F4;
    height: 52px;
    line-height: 52px;
    font-size: 16px;
    color: #333333;
    cursor: pointer;
  }
  .orange-cube{
    width: 9px;
    height: 9px;
    background: #FF7F15;
    border-radius: 5px;
    margin-right: 18px;
  }
  .time{
    margin-left: auto;
  }
}
</style>