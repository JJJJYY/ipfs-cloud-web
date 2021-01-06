<template>
  <!-- 资讯详情 -->
  <div class='information-detail'>
    <div class="breadcrumb" @click='goBack'>
      <a-icon type="left" />返回<span class='split-line'></span>{{higherLevel}}
    </div>

    <div class="article-content">
      <div class="title">{{data.title}}</div>
      <div class="time">{{data.created_at}}</div>
      <div class="content" v-html='data.content'></div>

      <div class='last-article pagination' v-if='next.pre_info'
        @click="viewDetail(next.pre_info.id)">
        <span class='label'>上一篇：</span>
        {{ next.pre_info.title }}
      </div>
      <div class='next-article pagination' v-if='next.next_info'
        @click="viewDetail(next.next_info.id)">
        <span class='label'>下一篇：</span>
        {{ next.next_info.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { getAnnounceDetail, getHelpDetail } from '../../api'

export default {
  data() {
    return {
      higherLevel: undefined,
      data: {},
      next: {},
      type: undefined,
      labelMap: {
        notice: '信息公告',
        help: '帮助中心',
      },
    }
  },
  created() {
    this.refresh()
  },
  methods: {
    refresh() {
      const { type, id } = this.$route.query
      if (!id || !type) {
        this.goBack()
        return
      }
      this.type = type
      this.renderList(id, type)
    },
    renderList(id, type) {
      this.higherLevel = this.labelMap[type]

      if (type === 'help') {
        getHelpDetail({ id }).then(res => {
          const data = (res || {}).data || {}
          this.data = data
          this.next = data.next
        }).catch(err => {
          this.$message.error(err || '网络错误，请稍后再试！')
          this.goBack()
        })
      } else {
        getAnnounceDetail({ id }).then(res => {
          const data = (res || {}).data || {}
          this.data = data
          this.next = data.next
        }).catch(err => {
          this.$message.error(err || '网络错误，请稍后再试！')
          this.goBack()
        })
      }
    },
    viewDetail(id) {
      const path = '/information/detail?type=' + this.type + '&id=' + id
      this.$router.push(path)
      this.refresh()
    },
    goBack() {
      this.$router.go(-1)
    },
  }
}
</script>

<style lang="less" scoped>
.information-detail{
  width:684px;
  margin:32px auto 277px;
  color: #333333;
  .breadcrumb{
    font-size: 16px;
    margin-bottom:16px;
    cursor: pointer;
    .split-line{
      display: inline-block;
      height: 11px;
      width: 1px;
      background-color: #B2B2B2;
      margin:0 9px 0 6px;
    }
    .anticon{
      margin-right:7px;
    }
  }
}
.article-content{
  background-color: #FFFFFF;
  border-radius: 8px;
  padding:27px 29px 41px;
  >.title{
    font-size: 20px;
    font-weight: 500;
    word-break: break-all;
  }
  >.time{
    font-size: 16px;
    line-height: 12px;
    margin:14px 0 39px;
  }
  >.content{
    font-size: 16px;
    line-height: 24px;
    min-height: 500px;
    word-break: break-all;
  }
}
.pagination{
  font-size: 16px;
  line-height: 21px;
  color:#666666;
  cursor: pointer;
  >.label{
    color:#333;
  }
}
.pagination + .pagination{
  margin-top:22px;
}

</style>