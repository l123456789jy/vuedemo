import Vue from 'vue'
import router from './router'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/index';
Vue.config.productionTip = false
Vue.use(VueRouter)


new Vue({
  el: '#app',
  store,
  router,//不简写就是router:router,
  render: h => h(App)
}).$mount('#app')
