import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        adId: null,
        ad: null
    },
    mutations: {
        setToken (state, token){
            state.token = token
            if (token){
                state.isUserLoggedIn = true
            }
            else{
                state.isUserLoggedIn = false
            }

        },
        setUser (state, user){
            state.user = user
        },
        setId (state, id){
            state.id = id
        },
        setAd (state, ad){
            state.ad = ad
        }
    },
    actions: {
        setToken ({commit}, token){
            commit('setToken',token)
        },
        setUser ({commit}, user){
            commit('setUser', user)
        },
        setId ({commit}, id){
            commit('setId', id)
        },
        setAd ({commit}, ad){
            commit('setAd', ad)
        }
    }
})