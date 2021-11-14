<template>

<div id="userCard" class="flex items-center w-full py-5 bg-cover card bg-base-200" :style="{ 'background-image': 'url('+ background +')' }">
    <div class=" card-side text-neutral-content">
        <figure class="p-6 flex justify-center ">
            <div class="indicator">
            <img :src=" avatar " class="rounded-lg shadow-lg">
              <div v-if="role === 'admin'" class="indicator-item indicator-bottom indicator-center badge badge-outline border-0 badge-lg tooltip" data-tip="Admin">🛡</div> 
            </div>
        </figure> 
        <div class="glass max-w-md card-body rounded-box">
            <h2 class="card-title">{{ name }}</h2> 
            <p>{{ bio }} </p> 
        </div>
    </div>
</div>

</template>

<script >
export default {
    name: "UserCard",
    props: {
        name: { type: String, required: true },
        bio: { type: String, default: "Pas encore de bio" },
        avatar: { type: String },
        background: { type: String },
        role: { type: String }
    }
}
</script>