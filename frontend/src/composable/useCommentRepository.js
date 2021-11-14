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

// export async function deleteComment(id) {
//     const comments = ref(await suppComment())

//     async function suppComment() {
//         try {
//             const res = await api.deleteComment(id)
//             const json = await res.json()
//             return json
//         } catch (err) {
//             throw new Error(err);
//         }
//     }

//     return {
//         comments,
//     }
// }

export function useCommentRepository() {

    const comments = ref([])
        , loading = ref(false)

    async function searchComments(id) {
        loading.value = true

        try {
            const res = await api.getAllComments(id)
            comments.value = await res.json()
            console.log(comments);
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
            // TODO: Fix le filtre
            comments.value = comments.value.filter(item => item.value.id !== id)
            
        } catch (err) {
            throw new Error(err)
        }
    }

    return {
        comments: readonly(comments),
        loading: readonly(loading),
        searchComments,
        createComment,
        deleteComment
    }
}