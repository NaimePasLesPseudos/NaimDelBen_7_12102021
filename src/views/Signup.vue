<template>
<Header />
<div class="hero min-h-screen bg-base-200">
    <div class="flex-col justify-center hero-content lg:flex-row">
        <div class="text-center lg:text-left">
            <h1 class="mb-5 text-5xl font-bold">
                Bienvenue sur Groupomania !
            </h1> 
            <p class="mb-5">
                Veuillez vous incrire pour profiter du réseau social de votre entreprise.
            </p>
        </div> 
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label> 
                    <input type="text" placeholder="email" class="input input-bordered">
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label> 
                    <input type="text" placeholder="password" class="input input-bordered"> 
                </div> 
                <div class="form-control mt-6">
                    <input type="button" value="Signup" class="btn btn-primary">
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
