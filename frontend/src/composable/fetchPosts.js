import { ref, watchEffect } from "vue";
import api from "../services/api";

export const Status = {
    IDLE: "IDLE",
    RUNNING: "RUNNING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
};

export async function searchPosts() {
    let status = ref(Status.IDLE)
    let posts = ref(await fetchPosts())
    watchEffect(() => console.log(status.value))

    async function fetchPosts() {
        status.value = Status.RUNNING
        try {
            const res = await api.getAllPosts()
            if (!res.ok) {
                status.value = Status.ERROR
            }
            console.log(res)
            const json = await res.json()
            status.value = Status.SUCCESS
            return json
        } catch (err) {
            status.value = Status.ERROR
            throw new Error(err);
        }
    }

    return {
        posts,
        status,
        Status,
    }
}