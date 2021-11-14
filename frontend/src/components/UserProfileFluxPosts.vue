<template>

<div class=" mt-10">
    <div>
        <router-link :to="'/post/' + postId" class="link link-hover">
            {{ postTitle }} - Posté le {{ postPublished }}. 
        </router-link>
    </div>
</div>

</template>

<script>
export default {
    name: "UserFlux",
    props: {
        postId: { type: Number },
        postTitle: { type: String },
        postPublished: { type: String }
    }
}
</script>