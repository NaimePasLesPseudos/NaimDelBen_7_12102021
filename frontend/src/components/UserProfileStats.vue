<template>

<div class="stats border flex mt-10">
    <div class="stat place-items-center place-content-center">
        <div class="stat-title"> Articles postés :</div>
        <div class="stat-value">{{ posts }}</div>
    </div>
    <div class="stat place-items-center place-content-center">
        <div class="stat-title"> Commentaires postés :</div>
        <div class="stat-value">{{ comments }}</div>
    </div>
    <!-- <div class="stat place-items-center place-content-center">
        <div class="stat-title"> Réactions :</div>
        <div class="stat-value">{{ likes }}</div>
    </div> -->
</div>

</template>

<script>
export default {
    name: "UserStats",
    props: {
        posts: {  },
        comments: { },
        likes: { type: Number, default: 0},
    }
}
</script>