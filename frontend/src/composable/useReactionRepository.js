import { ref, watchEffect } from "vue";
import api from "../services/api";


export async function searchReactions() {
    let Reactions = ref(await fetchPosts())

    async function fetchPosts() {
        try {
            const res = await api.getAllPosts()
            if (!res.ok) {
            }
            console.log(res)
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err);
        }
    }

    return {
        Reactions,
    }
}

export async function addReaction(id, post, user) {
    const newReaction = ref(await newReact())

    async function newReact() {
        try {
            const res = await api.addReaction(id, post, user)
            if (!res.ok) {
            }
            console.log(res)
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err);
        }
    }

    return {
        newReaction,
    }
}

export async function deleteReaction(id) {
    const Reaction = ref(await suppPost())

    async function suppPost() {
        try {
            console.log("coucou API");
            const res = await api.deletePost(id)
            if (!res.ok) {
            }
            console.log(res)
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err);
        }
    }

    return {
        Reaction,
    }
}