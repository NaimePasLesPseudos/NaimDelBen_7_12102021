import baseHeaders from "./header"
import { url } from "./apiURL"

const api = {
    async getAllPosts() {
        const res = await fetch(url + "posts", {
            headers: baseHeaders(), 
            })
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },
    
    async getPost(id) {
        const res = await fetch(url + `posts/${id}`, {
            headers: baseHeaders(),
        })
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },

    async createPost(content, title, author_id) {
        const res = await fetch(url + `posts/`, {
            method: "POST",
            headers: baseHeaders(),
            body: JSON.stringify({ author_id, title, content })
        })

        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res 
    },

    async updatePost(id, post) {
        const res = await fetch(url + `posts/${id}`, {
            method: "PATCH",
            headers: baseHeaders(),
            body: JSON.stringify({ post })
        })

        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res 
    },

    async deletePost(id) {
        const res = await fetch(url + `posts/${id}`, {
            method: "DELETE",
            headers: baseHeaders(),
        })

        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res 
    },
    
    async getUser(id) {
        const res = await fetch(url + "users/" + id, {
            headers: baseHeaders(),
        })
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },
   
    async getUserWithHistory(id) {
        const res = await fetch(url + "users/" + id + "/history", {
            headers: baseHeaders(),
        })
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },
    
    async getMeWithOnePost(id, post_id) {
        const res = await fetch(url + `users/${id}/post/${post_id}`, {
            headers: baseHeaders(),
        })
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },
    
    async updateUser(id, user) {
        const res = await fetch(url + `users/${id}`, {
            method: "PATCH",
            headers: baseHeaders(),
            body: JSON.stringify({ user })
        })
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },
    
    async deleteUser(id) {
        const res = await fetch(url + `users/${id}`, {
            method: "DELETE",
            headers: baseHeaders(),
        })
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },
    
    async getAllComments(id) {
        const res = await fetch(url + `posts/${id}/comments`, {
            headers: baseHeaders(),
        })
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },

    async createComment(author_id, post_id, content) {
        const res = await fetch(url + `posts/${post_id}/comments`, {
            method: "POST",
            headers: baseHeaders(),
            body: JSON.stringify({ author_id, post_id, content })
        })

        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res 
    },
    
    async deleteComment(id) {
        const res = await fetch(url + `posts/comments/${id}`, {
            method: "DELETE",
            headers: baseHeaders(),
        })

        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res 
    },

    async addReaction(reaction_id, post_id, user_id) {
        const res = await fetch(url + `reactions`, {
            method: "POST",
            headers: baseHeaders(),
            body: JSON.stringify({ reaction_id, post_id, user_id })
        })

        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res 
    },
}

export default api