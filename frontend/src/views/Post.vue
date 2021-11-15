<template>

<div class="flex-col mx-10">
    <Post 
        :title="post.title"
        :userName="post.authors.name"
        :userId="post.authors.id"
        :date="dateReturn(post.published)"
        :content="post.content"
        :comments="post.NumberOfComments"
        :thumbs="post.NumberOfThumbs"
        :lightBulbs="post.NumberOfLightBulbs"
        :rofls="post.NumberOfRofls"
        :hearts="post.NumberOfHearts"
        :id="post.id"
        @deleted="onPostDeleted"
    > </Post>

    <div class="comment border-2 bg-base-100 p-2 mb-5 rounded-box ml-5">
        <div id="commentArea" class="p-5">
            <div class="form-control">
                <textarea 
                    class="textarea h-24 textarea-bordered"
                    placeholder="Écrivez votre commentaire ici..."
                    type="text"
                    v-model="content"
                ></textarea>
                <button class="btn btn-primary mt-2" @click="addNewComment">Commenter</button>
            </div>
        </div>

        <span v-if="loading">
            CHARGEMENT DES COMMENTAIRES...
        </span>

        <Comment
            v-for="comment in comments"
                :userName="comment.authors.name"
                :userId="comment.authors.id"
                :date="dateReturn(comment.published)"
                :updateDate="dateReturn(comment.updated)"
                :content="comment.content"
                :comments="comment.NumberOfComments"
                :thumbs="comment.NumberOfThumbs"
                :lightBulbs="comment.NumberOfLightBulbs"
                :rofls="comment.NumberOfRofls"
                :hearts="comment.NumberOfHearts"
                :id="comment.id"
                :key="comment.id"
                @deleted="onCommentDeleted"
        > </Comment>
    </div>
</div>

</template>

<script>
import Post from '@components/Post.vue'
import Comment from '@components/Comment.vue'
import { searchPost } from '@composable/usePostRepository'
import { useCommentRepository } from '@composable/useCommentRepository'
import { dateTime } from '@composable/date'
import { ref, computed }from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

export default {
    name: "post",
    components: { Post, Comment },
    async setup() {
        const route = useRoute()
            , router = useRouter()
            , store = useStore()
            , toast = useToast()
            , { comments, loading, createComment: addComment, deleteCommentLocal, searchComments: findComments } = useCommentRepository()
            , actualPost = parseInt(route.params.id)
            , author = computed(() => store.getters['auth/userId'])
            , content = ref("")
            , { post } = await searchPost(route.params.id)

        findComments(route.params.id)

        async function addNewComment() {
            try {
                await addComment(content.value, actualPost, author.value.id)
            } catch (err) {
                toast.error('Retentez, ça fonctionne pas.')
                return
            }

            content.value = ""
            toast.success("Commentaire rajouté.")
        }

        function dateReturn(dateValue) {
            try {
                const res = dateTime(dateValue)
                return res.dateReturn
            } catch (error) {
                return error
            }
        }

        function onPostDeleted() {
            router.replace('/')
        }

        function onCommentDeleted(id) {
            deleteCommentLocal(id)
        }

        return { 
            post,
            comments,
            addNewComment,
            onPostDeleted,
            onCommentDeleted,
            dateReturn,
            loading,
            content,
            author,
        }
    }
}
</script>