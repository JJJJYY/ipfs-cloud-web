<template>
  <div class='product-item'>
    <div class="product-panel">
      <div class="title">
        <a-checkbox v-model="isSelected" @change='handleSelect'>
          {{ data.type && data.type.product_type_name || ''}}</a-checkbox>

      </div>
      <div class="introduce">{{ data.introduction }}</div>
      <div class="config-items">
        <div v-if='data.specs' class='item'>
          <div class="label">规格型号</div>
          <div class="label">{{ data.specs }}</div>
        </div>
        <div v-if='data.price' class='item'>
          <div class="label">单价/{{ data.type && data.type.unit || ''}}</div>
          <div class="label">￥{{ data.price }}</div>
        </div>
        <div v-if='data.lowest_num && data.lowest_num!=1' class='item'>
          <div class="label">最低起购/{{ data.type && data.type.unit || ''}}</div>
          <div class="label">{{ data.lowest_num }}</div>
        </div>
      </div>
      <div class='panel-footer'>
        <div>{{$t('message.__JG__')}}
          <span class='price'>￥{{ data.price * data.lowest_num }}</span>
        </div>
        <div v-if='data.info && data.info.length!==0' class="open-icon" @click='handleOpen'>
          <img src="@/assets/image/down-icon.png" alt="" v-if=" !open">
          <img src="@/assets/image/down-icon-active.png" alt="" v-if="open">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    data: {
      type: Object,
      default: null
    },
    activeId: {
      type: [String, Number],
      default: null
    },
    selectedIds: {
      type: Array,
      default: null
    }
  },
  computed: {
    open() {
      return this.activeId === this.data.id
    },
  },
  watch: {
    selectedIds(val) {
      this.isSelected = this.selectedIds.indexOf(this.data.id) !== -1
    }
  },
  data() {
    return {
      isSelected: undefined,
      product: {
        name: '分布式存储服务器',
        introduce: '企业级硬盘，高转速、高缓存、高可靠高可用和高性能确保数据读写高速稳定',
        model: 'STC36(4U 36盘位 576T)',
        price: '288800',
        min: '576',
        details: [{
          icon: 'up-circle',
          title: '容量',
          content: '温度、样样不漏'
        }]
      },
      price: undefined,

    }
  },
  methods: {
    handleSelect() {
      this.$emit('select')
    },
    handleOpen() {
      this.$emit('open')
    }
  }
}
</script>

<style lang="less" scoped>
.product-item{
  .product-panel{
    height: 100%;
    display: flex;
    flex-direction: column;
    padding:33px 25px 26px;
    .title{
      .ant-checkbox-wrapper{
        line-height: 22px;
        font-size: 22px;
        font-weight: bold;
        color: #FF6604;
      }
      .open-icon{
        margin-left:auto;
        transform: rotate(180deg);
        cursor: pointer;
      }
    }
    .introduce{
      flex:1;
      font-size: 17px;
      color: #333333;
      line-height: 28px;
      margin:19px 0 34px;
      word-break: break-all;
    }
    .config-items{
      padding:12px 19px 13px 22px;
      background-color: #F9F9F9;
      min-height: 118px;
      margin-bottom: 51px;
      >.item{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #333333;
        line-height: 32px;
      }
    }
    .panel-footer{
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      color: #333333;
      line-height: 20px;
      .open-icon{
        width:28px;
        height: 28px;
        cursor: pointer;
      }
      .price{
        font-size: 24px;
      }
    }
  }
}
</style>

<style lang="less">
.product-panel .ant-checkbox-inner{
  width:18px;
  height: 18px;
  font-size: 18px;
  border:1px solid @orange;
}
</style>