import { authAPI } from '@/services/authAPI'
import { login } from '@composable/connect.js'

const user = JSON.parse(localStorage.getItem('user'))
    , initialState = !!user 
    ? { status: { loggedIn: true }, user } 
    : { status: { loggedIn: false }, user: null }

export const auth = {
    namespaced: true, 
    state: initialState,
    getters: {
        userId: (state) => {
            return state.user
        },
        isConnected: (state) => {
            return !!state.status.loggedIn
        }
    },
    actions: {
        async signIn({ commit }, userSign) {
            try {
                await login(userSign)
                commit('loginSuccess', user)
                return Promise.resolve(user)
            } catch (error) {
                commit('loginFailure')
                    return Promise.reject(error)
            }
        },
        login({ commit }, user) {
            return authAPI.login(user).then(
                user => {
                    commit('loginSuccess', user)
                    return Promise.resolve(user)
                },
                error => {
                    commit('loginFailure')
                    return Promise.reject(error)
                }
            )
        },
        logout({ commit }) {
            authAPI.logout()
            commit('logout')
        },
        register({ commit }, user) {
            return authAPI.signup(user).then(
                response => {
                    commit('registerSuccess')
                    return Promise.resolve(response.data)
                },
                error => {
                    commit('registerFailure')
                    return Promise.reject(error)
                }
            )
        },
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true
            state.user = user
        },
        loginFailure(state) {
            state.status.loggedIn = false
            state.user = null
        },
        logout(state) {
            state.status.loggedIn = false
            state.user = null
        },
        registerSuccess(state) {
            state.status.loggedIn = false
        },
        registerFailure() {
            state.status.loggedIn = false
        }
    },
}