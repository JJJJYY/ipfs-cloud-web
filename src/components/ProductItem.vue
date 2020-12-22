<template>
  <div class='product-item'>
    <div class="product-panel">
      <div class="title">
        <a-checkbox v-model="isSelected" @change='handleSelect'></a-checkbox>
        {{product.name}}
        <img src="@/assets/image/down-icon.png" class='open-icon' alt="" v-if="direction==='top' && !open" @click='handleOpen'>
        <img src="@/assets/image/down-icon-active.png" class='open-icon' alt="" v-if="direction==='top' && open" @click='handleOpen'>
      </div>
      <div class="introduce">{{product.introduce}}</div>
      <div class="config-items">
        <div v-if='product.model' class='item'>
          <div class="label">规格型号</div>
          <div class="label">{{product.model}}</div>
        </div>
        <div v-if='product.price'  class='item'>
          <div class="label">单价/台</div>
          <div class="label">{{product.price}}</div>
        </div>
          <div v-if='product.min'  class='item'>
          <div class="label">最低起购/T</div>
          <div class="label">{{product.min}}</div>
        </div>
      </div>
      <div class='panel-footer'>
        <div>{{$t('message.__JG__')}}
          <span class='price'>￥{{price}}</span></div>
        <div class="open-icon" @click='handleOpen'>
          <img src="@/assets/image/down-icon.png" alt="" v-if="direction!=='top' && !open">
          <img src="@/assets/image/down-icon-active.png" alt=""  v-if="direction!=='top' && open">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    activeId: {
      type: String,
      default: null
    },
    selectAll: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    open() {
      return this.activeId === this.id
    },
  },
  watch: {
    selectAll(val) {
      this.isSelected = val
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
      this.$emit('select', this.id)
    },
    handleOpen() {
      this.$emit('open', this.id)
    }
  }
}
</script>

<style lang="less" scoped>
.product-item{
  .product-panel{
    padding:33px 25px 26px;
    .title{
      line-height: 22px;
      font-size: 22px;
      font-weight: bold;
      color: #FF6604;
      display: flex;
      align-items: center;
      .ant-checkbox-wrapper{
        margin-right: 7px;
      }
      .open-icon{
        margin-left:auto;
        transform: rotate(180deg);
        cursor: pointer;
      }
    }
    .introduce{
      font-size: 17px;
      color: #333333;
      line-height: 28px;
      margin:19px 0 34px;
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