import App from './App'
// 引入全局uView
import vant from 'wxcomponents/vant';
Vue.use(vant);
import index from '@/wxcomponents/vant/index.js'
// console.log(index)
// console.log(uni)
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif