<template>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box mx-5">

    <router-link to="/" class=" px-2 mx-2 tooltip tooltip-bottom" data-tip="Accueil">
        <span class="text-lg font-bold">
            <img class="logo object-cover " alt="Groupomania logo" src="../../assets/logo/icon-left-font-monochrome-white.png" />
        </span>
    </router-link> 

    <div class="flex-1 md:w-3/5">
        <div class="form-control">
            <input type="text" placeholder="Recherche" class="input input-ghost">
        </div>
        <button class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">             
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
            </svg>
        </button>
    </div>

    <div class=" dropdown dropdown-end">
        <div tabindex="0" class="">
            <!-- <div >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </div> -->
            <div class="avatar">
                <div class="rounded-full w-10 h-10 m-1">
                    <img :src=" user.avatar ">
                </div>
            </div>
            
            <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-primary rounded-box w-56">
                <div class="text-center"> {{ user.name }}</div>
                <li >
                    <router-link :to="'/user/' + user.id">Mon profil</router-link>
                </li> 
                <li >
                    <router-link to="/settings">Paramètres</router-link>
                </li> 
                <li >
                    <router-link to="/likes">Mes favoris</router-link>
                </li> 
                <li >
                    <label class="cursor-pointer label">
                        <span class="label-text">Mode Sombre</span> 
                        <input type="checkbox"  class="toggle toggle-secondary">
                    </label>
                </li> 
                <li >
                    <router-link to="/logout">Déconnexion</router-link>
                </li> 
            </ul>
        </div>
    </div>

</div>

</template>

<script>
import { searchUser } from "@composable/useUser";
import { useRoute } from 'vue-router'

export default {
    name: "MeInHeader",
    async setup() {
        const route = useRoute()
        const { user, status, Status } = await searchUser(8)
        return { user, status, Status }
    },
}
</script>

<style lang="scss" scoped>
.logo{
    width: 150px;
    height: 50px;
}
</style>

