import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import './lib/ant-design'
import './assets/css/common.less'

Vue.config.productionTip = false
Vue.prototype.$goto = function (path) {
  const cur = router && router.app && router.app.$route.path
  if (cur === path) {
      return
  }
  router.push(path)
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
