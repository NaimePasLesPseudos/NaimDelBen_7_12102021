<template>

<div class=" mt-10">
    <router-link :to="'/post/' + commentPostId" class="link link-hover">
        {{ commentContent }} <br> Posté le {{ commentPublished }} 
    </router-link>
</div>

</template>

<script>
export default {
    name: "UserFlux",
    props: {
        commentPostId: { type: Number },
        commentPublished: { type: String },
        commentContent: { type: String }
    }
}
</script>