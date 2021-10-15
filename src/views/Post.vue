<template>
<Header />


<div class="flex-col mx-10">
<h1 class="text-lg mb-5 ml-2"> En ce moment</h1>
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

</div>


<Footer />
</template>

<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Post from '../components/Post/post.vue'
import GroupomaniaData from "../services/Data"
</script>

<script>
export default {
  name: "post",
  components: {
    Post
  },
  data() {
    return {
      post: []
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
    }
  },
  mounted() {
    this.searchPost()
  }
}
</script>

<style>

</style>

