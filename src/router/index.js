import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Home =  resolve => require(['../container/home/index.vue'], resolve)
const Car =  resolve => require(['../container/car/index.vue'], resolve)
const Shop =  resolve => require(['../container/shop/index.vue'], resolve)
export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/manager/home',
            components:{body:Home},
            children:[]
        },
        {
            path:'/manager/car',
            components:{body:Car},
            children:[]
        },
        {
            path:'/manager/shop',
            components:{body:Shop}, 
            children:[]
        },
        {
            path: '/',
            redirect: '/manager/home'
        },
        {
            path: '*',
            redirect: '/manager/home'
        },
    ]
})