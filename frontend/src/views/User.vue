<template>
    <div v-if="status === Status.RUNNING">Loading...</div>
    <div v-else class="m-10">
        <UserCard
            :name="user.name"
            :avatar="user.avatar"
            :bio="user.bio"
            :background="user.background"
            :role="user.role"
        > </UserCard>

        <UserStats
            :posts="user.postsNb"
            :likes="user.likesNb"
            :comments="user.commentsNb"
        > </UserStats>

        <UserFlux
        > </UserFlux>
    </div>
</template>

<script>
import UserCard from '@components/UserCard.vue'
import UserStats from '@components/UserStats.vue'
import UserFlux from '@components/UserFlux.vue'
import { searchUser } from "@composable/useUser";
import { useRoute } from 'vue-router'

export default {
    components: { UserCard, UserStats, UserFlux },
    async setup() {
        const route = useRoute()
        const { user, status, Status } = await searchUser(route.params.id)
        return { user, status, Status }
    },
}

</script>