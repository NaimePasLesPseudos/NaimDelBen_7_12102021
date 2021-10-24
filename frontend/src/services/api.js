const url = 'https://616961c209e030001712c33c.mockapi.io/v1/'

const api = {
    async getAllPosts() {
        const res = await fetch(url + "posts")
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },
    
    async getPost(id) {
        const res = await fetch(url + `posts/${id}`)
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },
    
    async getUser(id) {
        const res = await fetch(url + "users/" + id)
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },
    
    async updateUser(id, data) {
        const res = await fetch(url + `users/${id}`, data)
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },
    
    async getAllComments(id) {
        const res = await fetch(url + `posts/${id}/comments`)
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    },
}

export default api