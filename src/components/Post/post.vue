<template>
<div class="post border-2 bg-base-100 p-5 mb-10 rounded-box">
    <p class="text-xs mb-2 text-">Publié par {{ userName }} il y a DATE</p>
    <h2 class="text-xl mb-2"> {{ title }} </h2>
    <p> {{ content }} </p>
<div class="flex mt-2">
      <p>💬 : {{ comments }} </p>
      <p>👍 : {{ thumbs }} </p>
      <p>💡 : {{ lightBulbs }} </p>
      <p>🤣 : {{ rofls }} </p>
      <p>💕 : {{ hearts }} </p>
    </div>
</div>
</template>

<script>
export default {
    name: "Post",
    props: {
        id: {
            type: Number
        },
        title: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        comments: {
            type: Number,
            default: 0
        },
        thumbs: {
            type: Number,
            default: 0
        },
        lightBulbs: {
            type: Number,
            default: 0
        },
        rofls: {
            type: Number,
            default: 0
        },
        hearts: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>

</style>