import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Home =  resolve => require(['../container/home/index.vue'], resolve)
const Car =  resolve => require(['../container/car/index.vue'], resolve)
const Shop =  resolve => require(['../container/shop/index.vue'], resolve)
export default new VueRouter({
    routes:[
        {
            path:'/home',
            components:{body:Home},
            children:[]
        },
        {
            path:'/car',
            components:{body:Car},
            children:[]
        },
        {
            path:'/shop',
            components:{body:Shop}, 
            children:[]
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '*',
            redirect: '/home'
        },
    ]
})