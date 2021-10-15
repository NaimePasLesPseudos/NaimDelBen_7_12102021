import http from "../../http-common"

class GroupomaniaData{
    getAllPosts() {
        return http.get("/v1/posts")
    }

    getUser(id) {
        return http.get("/v1/users/${id}")
    }

}

export default new GroupomaniaData