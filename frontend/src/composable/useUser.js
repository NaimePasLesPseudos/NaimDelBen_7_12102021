import { reactive, readonly, ref, watchEffect } from "vue";
import api from "../services/api";

export async function searchUser(id) {
    let user = reactive(await fetchUser())

    async function fetchUser() {
        try {
            const res = await api.getUser(id)
        
            const json = await res.json()
            return json[0]
        } catch (err) {
            throw new Error(err);
        }
    }

    return {
        user,
    }
}

export async function searchUserWithHistory(id) {
    let user = reactive(await fetchUser())

    async function fetchUser() {
        try {
            const res = await api.getUserWithHistory(id)
            
            const json = await res.json()
            return json[0]
        } catch (err) {
            throw new Error(err);
        }
    }

    return {
        user,
    }
}

export async function searchMewithOnePost(user_id, post_id) {
    let me = ref(await fetchMe())

    async function fetchMe(){
        try {
            const res = await api.getMeWithOnePost(user_id, post_id)
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err);
        }
    }
        
    return {
        me
    }
}

export async function updateMe(id, user) {
    let updateMe = reactive(await fetchMe())

    async function fetchMe(){
        try {
            const res = await api.updateUser(id, user)
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err)
        }
    }
        
    return {
        updateMe
    }
}

export async function destroyUser(id) {
    let destroy = ref(await deleteUser())

    async function deleteUser() {
        try {
            const res = await api.deleteUser(id)
            if (!res.ok) {
                return console.error("erreur lors de la suppression !");
            }
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err);
        }
    }
}


export function useUserRepository() {
    const user = reactive({})
        , loading = ref(false)

    async function searchUser(id) {
        loading.value = true

        try {
            const res = await api.getUser(id)

            const userContent = await res.json()
            Object.assign(user, userContent)

        } catch (err) {
            throw new Error(err)
        }

        loading.value = false
    }

    async function updateMe(id, user) {
        try {
            const res = await api.updateUser(id, user)
            
        } catch (err) {
            throw new Error(err)
        }
    }

    return {
        user,
        loading: readonly(loading),
        searchUser,
        updateMe
    }
}