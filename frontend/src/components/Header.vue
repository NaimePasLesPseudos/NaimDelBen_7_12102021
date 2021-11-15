<template>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box mx-5 flex justify-between">

    <router-link to="/" class=" px-2 mx-2 tooltip tooltip-bottom" data-tip="Accueil">
        <span class="text-lg font-bold">
            <img class="logo object-cover " alt="Groupomania logo" src="../assets/logo/icon-left-font-monochrome-white.png" />
        </span>
    </router-link> 

    <div class="px-2 mx-2">
        <div class="items-stretch flex">
            <router-link 
                :to="'/user/' + currentUser.id"
                class="btn btn-ghost btn-sm rounded-btn" > 
                Mon Profil
            </router-link>
            <router-link 
                to="/settings"
                class="btn btn-ghost btn-sm rounded-btn" > 
                Paramètres
            </router-link>
            <label 
                @click.prevent="logout"
                class="btn btn-ghost btn-sm rounded-btn" > 
                Déconnexion
            </label>
        </div>
    </div> 

    <!-- <div class="flex-none">
        <button class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">              
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>            
            </svg>
        </button>
    </div> 
    <div class="flex-none">
        <button class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">             
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
            </svg>
        </button>
    </div> -->

</div>

</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
    name: "MeInHeader",
    async setup() {
        const route = useRouter()
        const store = useStore()
        const currentUser = computed(() => store.state.auth.user)
        
        function logout() {
            store.dispatch('auth/logout')
            route.go('/login')
        }
        
        return {
            logout,
            currentUser
            }
    },
}
</script>

<style lang="scss" scoped>
.logo{
    width: 150px;
    height: 50px;
}
</style>

