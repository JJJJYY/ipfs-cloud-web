<template>
  <div class='mine-order'>
    <div class="filter-area">
      <div class="label">交易时间</div>
       <a-range-picker @change="onChange" />
      <div class="label label-2">订单号</div>
      <a-input allowClear></a-input>

      <div class="search-btn">搜索</div>
    </div>

    <div class='table-area'>
      <div class="table-header">
        <span class='th'>订单号</span>
        <span class='th name'>产品名称</span>
        <span class='th'>创建时间</span>
        <span class='th time'>支付时间</span>
        <span class='th amount'>付款金额（￥）</span>
        <span class='th flex-0-5'>状态</span>
        <span class='th'>操作</span>
      </div>
      <div class="table-body">
        <div class="table-item" v-for='(item,index) in tableData' :key='index'>
          <span class='td'>{{item.orderNo}}</span>
          <span class='td name'>{{item.name}}</span>
          <span class='td'>{{item.createAt}}</span>
          <span class='td time'>{{item.payAt}}</span>
          <span class='td amount'>{{item.amount}}</span>
          <span class='td flex-0-5'>{{item.status}}</span>
          <div class='td'>
            <a-button type='link' @click="$goto('/mineOrderDetail')">详情</a-button>
            <a-button type='link'>取消订单</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        orderNo: '1536481605665233',
        name: '分布式存储云',
        createAt: '2020-11-18  13:15:12',
        payAt: '2020-11-18  13:15:12',
        amount: '158,458,558',
        status: '已完成',
      }, {
        orderNo: '1536481605665233',
        name: '分布式存储云分布式存储云分布式存储云',
        createAt: '2020-11-18  13:15:12',
        payAt: '2020-11-18  13:15:12',
        amount: '158,458,558',
        status: '已完成',
      }]
    }
  },
  methods: {
    onChange() {

    }
  }
}
</script>

<style lang="less" scoped>
.mine-order{
  padding:24px;
}
.filter-area{
  display: flex;
  align-items: center;
  padding-bottom:20px;
  border-bottom:1px solid #EFEFEF;
  .label{
    white-space: nowrap;
    margin-right:8px;
    &.label-2{
      margin-left:48px;
    }
  }
  .ant-calendar-picker{
    width:236px;
    height: 32px;
  }
  .ant-input-affix-wrapper{
    width:224px;
    height: 32px;
  }
  .search-btn{
    padding:6px 26px 6px 26px;
    font-size: 14px;
    line-height: 14px;
    color: @orange;
    border: 1px solid @orange;
    border-radius: 4px;
    white-space: nowrap;
    margin-left:auto;
    cursor: pointer;
  }
}

.table-area{
  .table-header{
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #101010;
    >.th{
      flex:1;
      white-space: nowrap;
    }
  }
  .table-item{
    height: 44px;
    line-height: 44px;
    border-bottom:1px solid #F1F1F1;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #333333;
    >.td{
      flex:1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .table-header,.table-item {
    .flex-0-5{
      flex:0.5;
    }
    .amount{
      margin-left:10px;
    }
    .time{
      margin-left:6px;
    }
    .name{
      margin-left:6px;
    }
  }
  .ant-btn-link{
    padding:0;
  }
  .ant-btn-link + .ant-btn-link{
    margin-left:30px;
  }
}
</style>