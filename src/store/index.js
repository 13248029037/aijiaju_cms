import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        isBreadToggle: false,//面包导航
    },
    actions: {
        setIsBreadToggle({commit}, isBreadToggle) {
            console.info(isBreadToggle,'isBreadToggleisBreadToggle')
            commit('setIsBreadToggle', isBreadToggle)
        },
    },
    mutations: {
        setIsBreadToggle(state, isBreadToggle) {
            state.isBreadToggle = isBreadToggle
        },
    },
    getters: {
        isBreadToggle: s => s.isBreadToggle
    }
})
