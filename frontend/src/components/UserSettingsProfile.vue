<template>
<div class="ml-5">
    <h1>Paramètres du profil : </h1>

    <div class="form-control my-5">
        <label class="label">
        <span class="label-text">Modifier mon nom :</span>
        </label> 
        <input type="text" placeholder="Nom" class="input input-bordered" v-model="name">
    </div>

    <div class="form-control my-5">
        <label class="label">
        <span class="label-text">Changer ma phrase de présentation : </span>
        </label> 
        <textarea class="textarea h-24 textarea-bordered" placeholder="Bio" v-model="bio"></textarea>
    </div>

<!-- TODO: Changer la photo de profil -->
<!-- TODO: Changer la photo de fond -->

    <label for="change-profile-modal" class="btn btn-primary modal-button mb-10">Enregistrer</label> 
</div>

</template>

<script>
export default {
    name: "UserSettingsProfile",
    props: {
        name: { type: String, required: true },
        bio: { type: String },
    },
    setup() {
        
    }, 
}

</script>