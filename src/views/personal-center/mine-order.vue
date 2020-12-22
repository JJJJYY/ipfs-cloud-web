<template>
  <div class='mine-order'>
    <div class="filter-area">
      <div class="label">交易时间</div>
       <a-range-picker @change="onChange" />
      <div class="label label-2">订单号</div>
      <a-input allowClear></a-input>

      <div class="search-btn">搜索</div>
    </div>
  </div>
</template>

<script>
export default {
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
</style>