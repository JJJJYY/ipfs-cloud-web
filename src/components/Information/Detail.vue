<template>
<!-- 资讯详情 -->
  <div class='information-detail'>
    <div class="breadcrumb" @click='goBack'>
      <a-icon type="left" />返回<span class='split-line'></span>{{higherLevel}}
    </div>

    <div class="article-content">
      <div class="title">{{data.title}}</div>
      <div class="time">{{data.time}}</div>
      <div class="content">{{data.content}}</div>

      <div class='last-article pagination'>
        <span class='label'>上一篇：</span>
        {{data.last}}</div>
      <div class='next-article pagination'>
        <span class='label'>下一篇：</span>
        {{data.next}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  data() {
    return {
      higherLevel: undefined,
      data: {
        title: '他股市损失30万 合约交易却从未爆仓',
        time: '2020-02-23  20:09:09',
        content: `对于大部分虚拟货币市场的参与者来说，应该都是受2017年比特币牛市影响而入场的。但是今天我们认识的这位老韭菜---虎牙哥，却在2014年，比特币只有4000元人民币时，就接触到了比特币，但当时身处A股牛市，并且认为比特币是骗局，没有参与其中。几年后，不仅错过了币圈最大一轮的牛市红利，自己在股市的投资基本上也血本无归……
                  2020年初，虎牙哥涉足数字货币领域，经历了一年的摸爬滚打，不仅实现了小额盈利，他还总结了一些经验和小窍门，希望分享给大家，帮助大家在今后的投资中有所收获。`,
        last: '对于大部分虚拟货币市场的参与者来说',
        next: '对于大部分虚拟货币市场的参与者来说'
      }
    }
  },
  methods: {
    render(id, label) {
      this.higherLevel = label
    },
    goBack() {
      this.$emit('goBack')
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