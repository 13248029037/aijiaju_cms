import Vue from 'vue'
import Elementui from 'element-ui'
import "@/lib/init.scss"
Vue.use(Elementui)
import App from '@/App'
import store from '@/store'
import router from '@/router'
console.info(router)
console.info(store)
export default new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
})