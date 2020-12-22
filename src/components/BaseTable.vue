<template>
  <div class='base-table'>
    <div class='table-header'>
      <div v-for="th in tableSetting" :key='th.title' class='th-cell'>
        {{th.title}}
      </div>
    </div>
    <div class="table-body">
      <div class='td-cell' v-for="td in tableSetting" :key='td.key'>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableSetting: {
      type: Array,
      default: null
    },
    tableData: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>