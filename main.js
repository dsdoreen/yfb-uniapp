import Vue from 'vue'
import App from './App'
// import { myRequest } from '@/utils/request.js'
import myRequest from '@/utils/request.js' //引入
// Vue.prototype.$myRequest=myRequest
Vue.prototype.$myRequest = myRequest //通过Vue.prototype挂载至全局
Vue.config.productionTip = false

App.mpType = 'app'


const globalData = {
	userInfo: null
}
Vue.prototype.$globalData = globalData //通过Vue.prototype挂载至全局
const app = new Vue({
	...App
})
app.$mount()
