import Vue from 'vue'
import Vuex from 'vuex'
import { getProductType } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      created_at: undefined,
      email: undefined,
      id: undefined,
      lastlogin: undefined,
      nick_name: undefined,
      phone: undefined,
      status: undefined,
      updated_at: undefined,
      user_name: undefined,
    },
    productList: [] // 页脚的产品列表
  },
  mutations: {
    updateUser(state, user) {
      state.user = user
    },
    updateProductList(state, list) {
      const len = state.productList.length
      state.productList.splice(0, len, ...list)
    }
  },
  actions: {
    // 页脚的产品列表
    setProductList({ commit }) {
      getProductType().then(res => {
        const list = (res && res.data) || []
        commit('updateProductList', list)
      })
    }
  },
  modules: {
  }
})
