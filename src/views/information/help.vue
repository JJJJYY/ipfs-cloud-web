<template>
  <!-- 资讯相关列表 -->
  <div class='notice-list'>
    <div class="notice-item" v-for='(item,index) in list' :key='index' @click='viewDetail(item.id)'>
      <span class='orange-cube'></span>
      <div class="name">{{item.title}}</div>
      <div class="time">{{ $formatDate(item.created_at) }}</div>
    </div>

    <a-config-provider :locale="locale">
      <a-empty v-show='list.length===0' />
    </a-config-provider>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import { getHelpList } from '../../api'

export default {
  data() {
    return {
      list: [],
      locale: zhCN,
    }
  },
  created() {
    this.renderList()
  },
  methods: {
    renderList() {
      getHelpList({
        page: 1,
        count: 20
      }).then(res => {
        this.list = ((res || {}).data || {}).data || []
      })
    },
    viewDetail(id) {
      this.$router.push('/information/detail?type=help&id=' + id)
    },
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
.ant-empty{
  margin:100px auto 0;
}
</style>