import Vue from 'vue'
import App from './App'
import router from './router'
import Alert from '@/components/alert/alert'

Vue.config.productionTip = false
Vue.prototype.$Alert = Alert

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
