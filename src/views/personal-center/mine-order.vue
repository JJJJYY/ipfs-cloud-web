<template>
  <div class='mine-order'>
    <div class="filter-area">
      <div class="label">交易时间</div>
      <a-config-provider :locale="locale">
        <a-range-picker @change="onChangeDate" />
      </a-config-provider>
      <div class="label label-2">订单号</div>
      <a-input v-model="filter.order_code" allowClear :maxLength='30'></a-input>

      <div class="search-btn" @click='search'>搜索</div>
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
        <div v-show='tableData.length===0' class='empty-hint'>暂无订单记录</div>
        <div class="table-item" v-for='(item,index) in tableData ||[]' :key='index'>
          <span class='td'>{{ item.order_code }}</span>
          <span class='td name'>{{ item.group && item.group.product_group_name || '' }}</span>
          <span class='td'>{{ $formatTime(item.created_at) }}</span>
          <span class='td time'>{{ $formatTime(item.pay_time) }}</span>
          <span class='td amount'>{{ item.total_amount }}</span>
          <span
            class='td flex-0-5'>{{ item.status==0?'已取消':item.status==1?'已下单':item.status==2?'已完成':'' }}</span>
          <div class='td'>
            <a-button type='link' @click="$goto('/mineOrderDetail?id='+item.id)">详情</a-button>
            <a-button type='link' v-if='item.status==1' @click='handleCancel(item.id)'
              :disabled='canceling.indexOf(item.id)>-1'>取消订单
            </a-button>
          </div>
        </div>
      </div>
      <a-pagination v-show='tableData.length!==0' v-model="current"
        :page-size-options="pageSizeOptions" :total="total" show-size-changer :page-size="pageSize"
        @showSizeChange="onShowSizeChange">
        <template slot="buildOptionText" slot-scope="props">
          <span>{{ props.value }}条/页</span>
          <!-- <span v-if="props.value === '75'">全部</span> -->
        </template>
      </a-pagination>
    </div>
  </div>
</template>

<script>
import { getOrderList, cancelOrder } from '../../api/index'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default {
  name: 'mine-order',
  data() {
    return {
      locale: zhCN,
      tableData: [],
      canceling: [],
      loadingCancel: false,
      filter: {
        order_code: undefined,
        timeStart: undefined,
        timeEnd: undefined
      },
      pageSizeOptions: ['15', '30', '50'],
      current: 1,
      pageSize: 15,
      total: 50,
    }
  },
  created() {
    this.render()
  },
  methods: {
    search() {
      this.render()
    },
    render() {
      getOrderList({
        page: this.current,
        page_size: this.pageSize,
        ...this.filter
      }).then(res => {
        const data = res.data || {}
        this.current = data.current_page
        this.total = data.total
        this.pageSize = data.per_page
        this.tableData = data.data
      })
    },
    handleCancel(id) {
      this.$confirm({
        content: '确定取消该订单？',
        okText: '确认',
        cancelText: '取消',
        centered: true,
        onOk: () => {
          this.canceling.push(id)
          cancelOrder({ id }).then(res => {
            this.canceling.splice(this.canceling.indexOf(id), 1)
            this.$message.success(res.msg || '订单取消成功！')
            this.render()
          }).catch(() => {
            this.canceling.splice(this.canceling.indexOf(id), 1)
          })
        },
      });
    },
    onChangeDate(date, dateString) {
      this.filter.timeStart = dateString[0]
      this.filter.timeEnd = dateString[1]
    },
    // 换页
    onShowSizeChange(page, size) {
      this.current = page
      this.pageSize = size
      this.render()
    }
  }
}
</script>

<style lang="less" scoped>
.mine-order{
  padding:24px;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  flex:1;
  display: flex;
  flex-direction: column;
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
  .table-body{
    flex:1;
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
      margin-left:24px;
    }
    .time{
      margin-left:12px;
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
.empty-hint{
  text-align: center;
  margin-top:200px;
  color:rgba(0,0,0,0.5);
}
.ant-pagination{
  text-align: center;
  margin-top:16px;
}
</style>