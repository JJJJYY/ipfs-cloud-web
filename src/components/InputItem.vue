<template>
  <div class='input-item'>
    <div class="item-row">
      <div class='item-label'>{{ $t(label) }}</div>
      <div class='code-input ant-input-46'  v-if="type==='code'" >
        <a-input  :placeholder="$t(placeholder)" :maxLength='10'></a-input>
        <span class='orange-mark pointer get-code-btn' @click='getCode'>{{$t('message.__HQYZM__')}}</span>
      </div>
      <div class='phont-input ant-input-46'  v-else-if="type==='phone'" >
          <div class='phone-select'>86<a-icon type="caret-down" class='down-icon'/></div>
          <a-input  class='ant-input-46' allowClear :placeholder="$t(placeholder)"></a-input>
      </div>
      <a-input v-else class='ant-input-46' allowClear :placeholder="$t(placeholder)"></a-input>
    </div>
    <div class='error-hint'>{{errorHint}}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    errorHint: {
      type: String,
      default: null
    }
  },
  methods: {
    getCode() {

    }
  }

}
</script>

<style lang="less" scoped>
.input-item{
  .item-row{
    display: flex;
    align-items: center;
  }
  .item-label{
    min-width:100px;
    font-size: 16px;
    color: #333333;
    line-height: 16px;
  }
}
.error-hint{
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color:#E23F3F;
  font-weight: 400;
  margin:6px 0 12px 100px;
}
.code-input{
  width:100%;
  position: relative;
  .get-code-btn{
    position: absolute;
    right:16px;
    top:50%;
    transform: translateY(-50%);
    font-size: 16px;
    line-height: 16px;
  }
}
.phont-input{
  width:100%;
  display: flex;
  align-items: center;
  .phone-select{
    width:62px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    border:1px solid #d9d9d9;
    border-right: none;
  }
  .down-icon{
    color:#999999;
    margin-left:6px;
  }
  .ant-input-affix-wrapper{
    flex:1;
  }
}
</style>

<style lang="less">
.ant-input-46 .ant-input{
  height: 46px;
  border-radius: 0;
  padding-left:25px;
}
</style>