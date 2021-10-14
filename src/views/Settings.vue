<template>
<Header />

<div class="mx-10 w-1/2 ">
    <div class="tabs">
        <a class="tab tab-lifted tab-lg tab-active">Profile</a> 
        <a class="tab tab-lifted tab-lg">Group</a> 
        <a class="tab tab-lifted tab-lg">Others</a>  
    </div>

    <div class="">
        <h1>Profile's settings</h1>

        <div class="form-control my-5">
            <label class="label">
            <span class="label-text">Change your Name</span>
            </label> 
            <input type="text" placeholder="username" class="input input-bordered">
        </div>


        <div class="form-control my-5">
            <label class="label">
            <span class="label-text">Change your E-mail</span>
            </label> 
            <input type="text" placeholder="email" class="input input-bordered">
        </div>

        <div class="form-control my-5">
            <label class="label">
            <span class="label-text">Change your bio</span>
            </label> 
            <textarea class="textarea h-24 textarea-bordered" placeholder="Bio"></textarea>
        </div>

        <label for="my-modal" class="btn btn-primary modal-button mb-10">Save your changes</label> 
        <input type="checkbox" id="my-modal-2" class="modal-toggle"> 
        <div class="modal">
            <div class="modal-box">
                <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p> 
                <div class="modal-action">
                    <label for="my-modal" class="btn btn-primary">Change</label> 
                    <label for="my-modal" class="btn">Cancel</label>
                </div>
            </div>
        </div>
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
