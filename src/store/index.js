import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        isBreadToggle: false,//面包导航
        isLoading:false,
    },
    actions: {
        setIsBreadToggle({commit}, isBreadToggle) {
            console.info(isBreadToggle,'isBreadToggleisBreadToggle')
            commit('setIsBreadToggle', isBreadToggle)
        },
        setIsLoading({commit}, isLoading) {
            commit('setIsLoading', isLoading)
        },
    },
    mutations: {
        setIsBreadToggle(state, isBreadToggle) {
            state.isBreadToggle = isBreadToggle
        },
        setIsLoading(state, isLoading) {
            state.isLoading = isLoading
        },
    },
    getters: {
        isBreadToggle: s => s.isBreadToggle,
        isLoading: s => s.isLoading
    }
})
