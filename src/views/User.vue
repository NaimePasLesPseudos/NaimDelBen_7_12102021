<template>
<Header />

<div class="flex m-10">
    <div class="flex flex-col w-2/5 p-5">
        
        <user-card :name="user.name" :bio="user.bio" :avatar="user.avatar" />

        <div class="grid-flow-row shadow stats">
            <div class="stat">
                <div class="stat-title">Posts</div> 
                <div class="stat-value">{{ user.posts-nb }}</div> 
            </div> 
            <div class="stat">
                <div class="stat-title">Comments</div> 
                <div class="stat-value">{{ user.comments-nb }}</div> 
            </div> 
            <div class="stat">
                <div class="stat-title">Likes</div> 
                <div class="stat-value">{{ user.likes-nb }}</div> 
            </div>
        </div>
    </div>

    <div class="flex w-3/5 p-10">
        <h1 class="text-6xl">Flux</h1>

    </div>
</div>


<Footer />
</template>

<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import UserCard from '../components/User/UserCard.vue'
import GroupomaniaData from '../services/Data'
</script>

<script>

export default {
    name: "MyProfil",
    components: {
        UserCard
    },
    data() {
        return {
            user: []
        }
    },
    methods: {
        searchUser() {
            GroupomaniaData.getUser(this.$route.params.id)
            .then((result) => {
                this.user = result.data
                console.log(result.data)
            }).catch((err) => {
                console.log(err)
            });
        }
    },
    mounted() {
        this.searchUser()
    }
}
</script>

<style>

</style>