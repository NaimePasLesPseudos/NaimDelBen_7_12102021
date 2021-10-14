<template>
<!-- TODO: Rendre le menu responsive en mobile -->

<div class="navbar shadow-lg bg-neutral text-neutral-content flex justify-between items-center rounded-box mt-2 mb-10 mx-10 ">

    <div class="flex-1 ">
        <img class="object-cover" alt="Groupomania logo" src="../assets/logo/icon-left-font-monochrome-white.png" />
        <a class="btn btn-link">
            <router-link to="/">Home</router-link>
        </a> 
        <div class="form-control w-2/5">
            <input type="text" placeholder="Search" class="input input-ghost">
        </div>
        <button class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">             
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
            </svg>
        </button>
    </div>

    <div class="">
        <a class="btn btn-link btn-secondary">
            <router-link to="/signup">Signup</router-link>
        </a> 
        <a class="btn btn-link">
            <router-link to="/login">Login</router-link>
        </a>
        <div class="avatar">
            <div class="rounded-full w-10 h-10">
                <img src="http://daisyui.com/tailwind-css-component-profile-2@40w.png">
            </div>
        </div> 
        <div class="dropdown dropdown-end btn-link">
            <div tabindex="0" class="btn btn-ghost rounded-btn">
                Fake NAME ↓
            </div> 
            <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <li >
                    <a class="btn btn-ghost text-neutral">
                        <router-link to="/profil">Profil</router-link>
                    </a> 
                </li> 
                <li >
                    <a class="btn btn-link">
                        <router-link to="/settings">Settings</router-link>
                    </a> 
                </li> 
                <li >
                    <a class="btn btn-link">
                        <router-link to="/likes">My Likes</router-link>
                    </a> 
                </li> 
                    <div class="divider divide-primary "></div> 
                <li >
                    <label class="cursor-pointer label">
                        <span class="label-text">Dark Mode</span> 
                        <input type="checkbox" checked="checked" class="toggle toggle-secondary">
                    </label>
                </li> 
                    <div class="divider"></div> 
                <li >
                    <a class="btn btn-link">
                        <router-link to="/logout">Logout</router-link>
                    </a> 
                </li> 
            </ul>
        </div>
    </div>
</div>

</template>

<script>

</script>

<style lang="scss" scoped>
img{
    width: 150px;
    height: 50px;
}
</style>

