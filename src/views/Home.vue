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
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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

