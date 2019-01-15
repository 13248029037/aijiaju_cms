import Vue from 'vue'
import Elementui from 'element-ui'
import "@/lib/init.scss"
Vue.use(Elementui)
import App from '@/App'
import store from '@/store'
import router from '@/router'
console.info(router)
export default new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
})