<template>

<div class="flex-col mx-10">
    <div v-if="status !== Status.SUCCESS"> Loading... </div>
    <div v-else>
        <h1 class="text-lg mt-10 mb-5 ml-2"> Les dernières publications :</h1>
        <Post 
            v-for="post in posts"
            :title="post.title"
            :userName="post.userName"
            :content="post.content"
            :comments="post.comments"
            :thumbs="post.thumbs"
            :lightBulbs="post.lightbulbs"
            :rofls="post.rofls"
            :hearts="post.hearts"
            :key="post.id"
            :id="post.id"
        > 
        </Post>
    </div>
</div>

</template>

<script >
import Post from '@components/Post/post.vue'
import { searchPosts } from '@composable/fetchPosts'

export default {
    components: { Post },
    async setup() {
        const { posts, status, Status } = await searchPosts()
        return { posts, status, Status }
    },
}
</script>
