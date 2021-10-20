<template>

<div class="flex items-center w-64 px-4 py-10 bg-cover card bg-base-200" style="background-image: url(&quot;https://picsum.photos/id/314/1000/300&quot;);">
    <div class="card glass text-neutral-content">
        <figure class="p-6">
            <img :src=" avatar " class="rounded-lg shadow-lg">
        </figure> 
        <div class="max-w-md card-body">
            <h2 class="card-title">{{ name }}</h2> 
            <p>{{ bio }} </p> 
        </div>
    </div>
</div>

</template>

<script >
export default {
    name: "UserCard",
    props: {
        name: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            default: "Pas encore de bio"
        },
        avatar: {
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>