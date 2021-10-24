import { ref, watchEffect } from "vue";
import api from "../services/api";

export const StatusComments = {
    IDLE: "IDLE",
    RUNNING: "RUNNING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
};

export async function searchComments(id) {
    let statusComments = ref(StatusComments.IDLE)
    let comments = ref(await fetchComments())
    watchEffect(() => console.log(statusComments.value))

    async function fetchComments() {
        statusComments.value = StatusComments.RUNNING
        try {
            const res = await api.getAllComments(id)
            if (!res.ok) {
                statusComments.value = StatusComments.ERROR
            }
            console.log(res)
            const json = await res.json()
            statusComments.value = StatusComments.SUCCESS
            return json
        } catch (err) {
            statusComments.value = StatusComments.ERROR
            throw new Error(err);
        }
    }

    return {
        comments,
        statusComments,
        StatusComments,
    }
}