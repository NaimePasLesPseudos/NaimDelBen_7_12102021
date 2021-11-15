import { reactive, readonly, ref, watchEffect } from "vue";
import api from "../services/api";

export async function searchAllPosts() {
    let posts = ref(await fetchPosts())

    async function fetchPosts() {
        try {
            const res = await api.getAllPosts()
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err);
        }
    }

    return {
        posts,
    }
}

export async function searchPost(id) {
    let post = ref(await fetchPost())

    async function fetchPost() {
        try {
            const res = await api.getPost(id)
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err);
        }
    }

    return {
        post,
    }
}

export async function addPost(content, title, author) {
    const newPost = ref(await addPost())

    async function addPost() {
        try {
            const res = await api.createPost(content, title, author)
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err);
        }
    }

    return {
        newPost,
    }
}

export async function deletePost(id) {
    const posts = ref(await suppPost())

    async function suppPost() {
        try {
            const res = await api.deletePost(id)
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err);
        }
    }

    return {
        posts,
    }
}

export function usePostRepository() {
    const posts = ref([])
        , post = reactive({}) // Post for edition
        , loading = ref(false)

    async function fetchPosts() {
        loading.value = true

        try {
            const res = await api.getAllPosts()
            posts.value = await res.json()
        } catch (err) {
            throw new Error(err)
        }
        loading.value = false
    }

    async function fetchOnePost(id) {
        loading.value = true

        try {
            const res = await api.getPost(id)
            
            const postContent = await res.json()
            Object.assign(post, postContent)

        } catch (err) {
            throw new Error(err)
        }
        loading.value = false
    }

    async function updatePost(id, post) {
        try {
            const res = await api.updatePost(id, post)

        } catch (err) {
            throw new Error(err)
        }
    }

    async function deletePost(id) {
        try {
            const res = await api.deletePost(id)
            deleteLocalPost(id)
            
        } catch (err) {
            throw new Error(err)
        }
    }

    function deleteLocalPost(id) { // delete post from state and not remotelly
        const index = posts.value.findIndex(item => item.id === id)

        if (index === -1) return

        posts.value.splice(index, 1)
    }

    return {
        posts,
        post,
        loading: readonly(loading),
        fetchPosts,
        fetchOnePost,
        updatePost,
        deletePost,
        deleteLocalPost,
    }
}