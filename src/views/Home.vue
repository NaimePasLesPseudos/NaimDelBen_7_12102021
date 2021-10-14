<template>
<Header />


<div class="flex-col mx-10">
<h1 class="text-lg mb-5 ml-2"> En ce moment</h1>
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
  />

</div>


<Footer />
</template>

<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Post from '../components/Post/post.vue'
</script>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Un super titre",
          userName: "Un user génial",
          content: "lorem ipsum blabla Abracadabra",
          comments: 1,
          thumbs: 2,
          rofls: 3,
          hearts: 4
        },
        {
          id: 2,
          title: "Un autre super titre",
          userName: "Un autre user génial",
          content: "lorem ipsum ",
          comments: 42,
          thumbs: 0,
          lightbulbs: 21,
        }
      ]
    }
  }
}
</script>

<style>

</style>

