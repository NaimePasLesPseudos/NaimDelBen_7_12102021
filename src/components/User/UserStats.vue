<template>
<div class="stats border flex">
    <div class="stats-value">{{ posts }}</div>
    <div class="">{{ comments }}</div>
    <div class="">{{ likes }}</div>
</div>
</template>

<script>
export default {
    name: "UserStats",
    props: {
        posts: { type: Number },
        comments: {},
        likes: {},
    }
}
</script>

<style>

</style>