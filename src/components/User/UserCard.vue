<template>
        <div class="flex items-center mb-10">
            <div class="avatar">
                <div class="mb-8 rounded-btn w-24 h-24">
                    <img src="http://daisyui.com/tailwind-css-component-profile-2@94w.png">
                </div>
            </div> 
            <div class="flex-col content-between ml-10">
                <h2 class="card-title">{{ name }}</h2>
                <p class="text-base-content">{{ bio }} </p>
            </div>
        </div>
</template>

<script >
export default {
    name: "UserCard",
    props: {
        name: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            default: "Pas encore de bio"
        }
    }
}


</script>

<style lang="scss" scoped>

</style>