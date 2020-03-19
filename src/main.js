import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import breadcrumb from 'components/common/elementComponent/Breadcrumb'

Vue.use(ElementUI)
Vue.config.productionTip = false

//注册全局组件,全局组件在任何组件都可以使用
Vue.component('breadcrumb',breadcrumb)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


require('./assets/css/base.css')