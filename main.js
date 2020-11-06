import Vue from 'vue'
import App from './App'
import util from '@/ui/utils/util.js'
import validate from '@/ui/utils/validate.js'

Vue.prototype.$utils = util
Vue.prototype.$validate = validate
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
