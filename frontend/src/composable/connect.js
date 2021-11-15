import { ref, watchEffect } from "vue";
import { authAPI } from "../services/authAPI";

export async function login(userSign) {
    let user = ref(await login())

    async function login() {
        try {
            const res = await authAPI.login(userSign)
            const json = await res.json()
            window.localStorage.setItem('user', JSON.stringify(json))
            return json
        } catch (err) {
            throw new Error(err)
        }
    }

    return {
        user
    }
}

export async function signup(name, email, password) {
    let user = ref(await signup())

    async function signup() {
        try {
            const res = await authAPI.signup(name, email, password)
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err)
        }
    }

    return {
        user
    }
}