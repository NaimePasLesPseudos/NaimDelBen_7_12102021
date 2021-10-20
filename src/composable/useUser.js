import { ref, watchEffect } from "vue";
import api from "../services/api";

export const Status = {
    IDLE: "IDLE",
    RUNNING: "RUNNING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
};

export async function searchUser(id) {
    let status = ref(Status.IDLE)
    let user = ref(await fetchUser())
    watchEffect(() => console.log(status.value))

    async function fetchUser() {
        status.value = Status.RUNNING
        try {
            const res = await api.getUser(id)
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
        user,
        status,
        Status,
    }
}