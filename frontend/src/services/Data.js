import http from "../http-common"

// class GroupomaniaData{
//     async getAllPosts() {
//         return http.get("/v1/posts")
//     }

//     async getPost(id) {
//         return http.get(`/v1/posts/${id}`)
//     }

//     async getUser(id) {
//         return http.get(`/v1/users/${id}`)
//     }

//     async updateUser(id, data) {
//         return http.put(`/v1/users/${id}`, data)
//     }
    
//     async getAllComments(id) {
//         return http.get(`/v1/posts/${id}/comments`)
//     }
// }




class GroupomaniaData{
    async getAllPosts() {
        const res = await http.get("/v1/posts")
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    }
    
    async getPost(id) {
        const res = await http.get(`/v1/posts/${id}`)
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    }
    
    async getUser(id) {
        const res = await http.get(`/v1/users/${id}`)
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    }
    
    async updateUser(id, data) {
        const res = await http.put(`/v1/users/${id}`, data)
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    }
    
    async getAllComments(id) {
        const res = await http.get(`/v1/posts/${id}/comments`)
        if (res.status < 200 || res.status >= 300) throw new Error(res.statusText)
        return res
    }
}

export default new GroupomaniaData