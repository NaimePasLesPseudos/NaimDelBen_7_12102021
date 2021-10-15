<template>
<Header />
  <div class="post">
    <h1>This is a post page</h1>
      <div>Item: {{ $route.params.id }}</div>

  </div>
<Footer />
</template>

<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
</script>

<style>

</style>
