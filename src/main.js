// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import './assets/style/Theme.scss'
import store from './store'
import axios from './unit/http'
import {Message} from 'element-ui'
//import axios from 'axios'
Vue.use(Element)
Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.$bus=new Vue()
Vue.prototype.$Message=Message
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
