<template>
    <div v-if="status === Status.RUNNING">Loading...</div>
    <div v-else class="m-10">
        <UserCard
            :name="user.name"
            :avatar="user.avatar"
            :bio="user.bio"
        > </UserCard>
    </div>
</template>

<script>
import UserCard from '@components/UserCard.vue'
import { searchUser } from "@composable/useUser";
import { useRoute } from 'vue-router'

export default {
    components: { UserCard },
    async setup() {
        const route = useRoute()
        const { user, status, Status } = await searchUser(route.params.id)
        return { user, status, Status }
    },
}

</script>