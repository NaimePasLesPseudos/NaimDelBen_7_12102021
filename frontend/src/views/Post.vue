<template>

<div class="flex-col mx-10">
    <Post 
        :title="post.title"
        :userName="post.userName"
        :content="post.content"
        :comments="post.comments"
        :thumbs="post.thumbs"
        :lightBulbs="post.lightbulbs"
        :rofls="post.rofls"
        :hearts="post.hearts"
        :id="post.id"
    > </Post>

<!-- TODO : Rendre la zone commentaire active -->
    <div class="comment border-2 bg-base-100 p-2 mb-5 rounded-box ml-5">
        <div id="commentArea" class="p-5" name="commentArea">
            <div class="form-control">
            <textarea class="textarea h-24 textarea-bordered" placeholder="Écrivez votre commentaire ici..."></textarea>
            <button class="btn btn-primary mt-2">Commenter</button>
        </div>

        </div>
        <Comment
            v-for="comment in comments"
                :title="comment.title"
                :userName="comment.userName"
                :content="comment.content"
                :comments="comment.comments"
                :thumbs="comment.thumbs"
                :lightBulbs="comment.lightbulbs"
                :rofls="comment.rofls"
                :hearts="comment.hearts"
                :id="comment.id"
                :key="comment.id"
        > </Comment>
    </div>
</div>

</template>

<script>
import Post from '@components/post.vue'
import Comment from '@components/Comment.vue'
import { searchPost } from '@composable/fetchPosts'
import { searchComments } from '@composable/fetchComments'
import { useRoute } from 'vue-router'

export default {
    name: "post",
    components: { Post, Comment },
    async setup() {
        const route = useRoute()
        const { post, status, Status } = await searchPost(route.params.id)
        const { comments, statusComments, StatusComments } = await searchComments(route.params.id)
        return { post, comments, status, Status, statusComments, StatusComments }
    }
}
</script>


