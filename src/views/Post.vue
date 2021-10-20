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
  />


<div class="comment border-2 bg-base-100 p-2 mb-5 rounded-box ml-5">
  <!-- TODO: Zone de commentaire -->
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
  />
</div>
</div>

</template>

<script setup>
import Post from '@components/Post/post.vue'
import Comment from '@components/Comment/Comment.vue'
import GroupomaniaData from "../services/Data"
</script>

<script>
export default {
  name: "post",
  components: {
    Post,
    Comment
  },
  data() {
    return {
      post: [],
      comments: [],
    }
  },
  methods: {
    searchPost() {
      GroupomaniaData.getPost(this.$route.params.id)
      .then((result) => {
        this.post = result.data
        console.log(result.data)
      }).catch((err) => {
        console.log(err)
      });
    },
    searchComments() {
      GroupomaniaData.getAllComments(this.$route.params.id)
      .then((result) => {
        this.comments = result.data
        console.log(result.data)
      }).catch((err) => {
        console.log(err)
      });
    }
  },
  mounted() {
    this.searchPost()
    this.searchComments()
  }
}
</script>


