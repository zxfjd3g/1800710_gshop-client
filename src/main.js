/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'

// 注册全局组件
Vue.component('TopHeader', TopHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
