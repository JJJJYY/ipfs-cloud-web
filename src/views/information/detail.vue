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

      <div class='last-article pagination'>
        <span class='label'>上一篇：</span>
        {{data.last}}
      </div>
      <div class='next-article pagination'>
        <span class='label'>下一篇：</span>
        {{data.next}}
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
      labelMap: {
        notice: '信息公告',
        help: '帮助中心',
      },
    }
  },
  created() {
    const { type, id } = this.$route.query
    if (!id || !type) {
      this.goBack()
      return
    }
    this.render(id, type)
  },
  methods: {
    render(id, type) {
      this.higherLevel = this.labelMap[type]

      if (type === 'help') {
        getHelpDetail({ id }).then(res => {
          this.data = (res || {}).data || {}
        }).catch(err => {
          this.$message.error(err || '网络错误，请稍后再试！')
          this.goBack()
        })
      } else {
        getAnnounceDetail({ id }).then(res => {
          this.data = (res || {}).data || {}
        }).catch(err => {
          this.$message.error(err || '网络错误，请稍后再试！')
          this.goBack()
        })
      }
    },
    goBack() {
      this.$router.go(-1)
    }
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
  }
}
.pagination{
  font-size: 16px;
  line-height: 21px;
  color:#666666;
  cursor: pointer;
  &.last-article{
    margin-bottom:22px;
  }
  >.label{
    color:#333;
  }
}

</style>