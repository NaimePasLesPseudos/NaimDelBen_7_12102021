<template>
<Header />

<div class="flex m-10">
    <div class="flex flex-col w-2/5 p-5">
        
        <user-card :name="name" :bio="bio" />

        <div class="grid-flow-row shadow stats">
            <div class="stat">
                <div class="stat-title">Posts</div> 
                <div class="stat-value">10</div> 
            </div> 
            <div class="stat">
                <div class="stat-title">Comments</div> 
                <div class="stat-value">42</div> 
            </div> 
            <div class="stat">
                <div class="stat-title">Likes</div> 
                <div class="stat-value">1200</div> 
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
</script>

<script>
export default {
    name: "Profil",
    components: {
        UserCard
    },
    data() {
        return {
            name: "Michel",
            bio: "Du service info et de l'humour"
        }
    }
}
</script>

<style>

</style>
