import http from "../../http-common"

class GroupomaniaData{
    getAllPosts() {
        return http.get("/v1/posts")
    }

    getPost(id) {
        return http.get(`/v1/posts/${id}`)
        console.log('get one Post : ok')
    }

    getUser(id) {
        return http.get(`/v1/users/${id}`)
    }

}

export default new GroupomaniaData