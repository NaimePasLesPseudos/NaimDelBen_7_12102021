<template>
<div class="hero min-h-screen bg-accent">
    <div class="flex-col justify-center hero-content lg:flex-row">
        <div class="text-center lg:text-left">
            <h1 class="mb-5 text-5xl font-bold">
                Bienvenue sur Groupomania !
            </h1> 
            <p class="mb-5">
                Bienvenue. Inscrivez-vous pour profiter de votre réseau social.
            </p>
        </div> 
        <div class="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
            <div class="card-body">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text"></span>
                    </label> 
                    <input type="text" placeholder="Nom :" class="input input-bordered">
                </div> 
                <div class="form-control">
                    <label class="label">
                        <span class="label-text"></span>
                    </label> 
                    <input type="text" placeholder="Adresse e-mail :" class="input input-bordered">
                </div> 
                <div class="form-control">
                    <label class="label">
                        <span class="label-text"></span>
                    </label> 
                    <input type="text" placeholder="Mot de passe :" class="input input-bordered"> 
                </div> 
                <div class="form-control mt-6">
                    <input type="button" value="S'inscrire" class="btn btn-accent">
                </div>
                <div >
                    <div class="divider">ou</div> 
                    <a class="btn btn-info btn-block">
                        <router-link to="/login"> J'ai déjà un compte</router-link>
                    </a> 
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />
</template>

<script setup>
import Footer from '@components/Nav/Footer.vue'
</script>

<style>

</style>
