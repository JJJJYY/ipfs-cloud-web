<template>
  <!-- 资讯相关列表 -->
  <div class='help-panel'>
    <div class='help-list'>
      <div class="help-item" v-for='(item,index) in list' :key='index' @click='viewDetail(item.id)'>
        <span class='orange-cube'></span>
        <div class="name">{{item.title}}</div>
        <div class="time">{{ $formatDate(item.created_at) }}</div>
      </div>

      <a-config-provider :locale="locale">
        <a-empty v-show='list.length===0' />
      </a-config-provider>
    </div>

    <a-config-provider :locale="locale">
      <a-pagination v-show='total>count' size="small" :total="total" :pageSize='count'
        :current='page' :show-total="total => `共 ${total} 条`" show-size-changer show-quick-jumper
        @change='handlePageChange' @showSizeChange='handlePageChange' />
    </a-config-provider>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import { getHelpList } from '../../api'

export default {
  name: 'help',
  data() {
    return {
      list: [],
      locale: zhCN,
      total: 0,
      page: 1,
      count: 20
    }
  },
  created() {
    this.renderList()
  },
  methods: {
    renderList() {
      getHelpList({
        page: this.page,
        count: this.count
      }).then(res => {
        const data = (res || {}).data || {}
        this.total = data.total
        this.list = data.data || []
      })
    },
    // 翻页
    handlePageChange(page, size) {
      this.page = page
      this.count = size
      this.renderList()
    },
    viewDetail(id) {
      this.$router.push('/information/detail?type=help&id=' + id)
    },
  }
}
</script>

<style lang="less" scoped>
.help-panel{
  width:1200px;
  margin:0 auto;
  background: #FFFFFF;
  border-radius: 8px;
  padding:42px 59px 42px 42px;
  margin-bottom:200px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.help-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .help-item{
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
.ant-pagination{
  margin:100px auto 0;
  text-align: center;
}
</style>