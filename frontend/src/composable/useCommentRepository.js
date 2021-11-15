import { ref, watchEffect, computed, readonly } from "vue";
import api from "../services/api";


export async function searchComments(id) {
    const comments = ref(await fetchComments())

    async function fetchComments() {
        try {
            const res = await api.getAllComments(id)
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err);
        }
    }

    return {
        comments,
    }
}

export async function createComment(content, post, author) {
    const newComment = ref(await addComment())

    async function addComment() {
        try {
            const res = await api.createComment(author, post, content)
            const json = await res.json()
            return json
        } catch (err) {
            throw new Error(err);
        }
    }

    return {
        newComment,
    }
}

export function useCommentRepository() {

    const comments = ref([])
        , loading = ref(false)

    async function searchComments(id) {
        loading.value = true

        try {
            const res = await api.getAllComments(id)
            comments.value = await res.json()
        } catch (err) {
            throw new Error(err)
        }

        loading.value = false
    }

    async function createComment(content, post, author) {
        try {
            const res = await api.createComment(author, post, content)
            const comment = await res.json()
            comments.value.unshift(comment)
        } catch (err) {
            throw new Error(err)
        }
        
    }

    async function deleteComment(id){
        try {
            const res = await api.deleteComment(id)
            deleteCommentLocal(id)
        } catch (err) {
            throw new Error(err)
        }
    }

    async function deleteCommentLocal(id) {
        const index = comments.value.findIndex(item => item.id === id)

        if (index === -1) return

        comments.value.splice(index, 1)
    }

    return {
        comments: readonly(comments),
        loading: readonly(loading),
        searchComments,
        createComment,
        deleteComment,
        deleteCommentLocal,
    }
}