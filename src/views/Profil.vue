<template>
<Header />

<div class="flex m-10">
    <div class="flex flex-col w-2/5 p-5">
        
        <div class="flex items-center mb-10">
            <div class="avatar">
                <div class="mb-8 rounded-btn w-24 h-24">
                    <img src="http://daisyui.com/tailwind-css-component-profile-2@94w.png">
                </div>
            </div> 
            <div class="flex-col content-between ml-10">
                <h2 class="card-title">Name Name</h2>
                <p class="text-base-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, tenetur deleniti. </p>
            </div>
        </div>

        <div class="grid-flow-row shadow stats">
            <div class="stat">
                <div class="stat-title">Posts</div> 
                <div class="stat-value">10</div> 
            </div> 
            <div class="stat">
                <div class="stat-title">Comments</div> 
                <div class="stat-value">42</div> 
            </div> 
            <div class="stat">
                <div class="stat-title">Likes</div> 
                <div class="stat-value">1200</div> 
            </div>
        </div>
    </div>

    <div class="flex w-3/5 p-10">
        <h1 class="text-6xl">Flux</h1>
    </div>
</div>


<Footer />
</template>

<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
</script>

<style>

</style>
