import Vue from 'vue'
import Vuex from 'vuex'

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
    }
  },
  mutations: {
    updateUser(state, user) {
      state.user = user
    },
  },
  actions: {
  },
  modules: {
  }
})
