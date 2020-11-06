import Vue from 'vue'
import App from './App'
import util from '@/ui/utils/util.js'

Vue.prototype.$utils = util
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
