<template>

<div class="ml-5">
    <h1>Paramètres du compte : </h1>

    <div class="form-control my-5">
        <label class="label">
        <span class="label-text">Changer mon mail :</span>
        </label> 
        <input type="text" placeholder="Mail" class="input input-bordered" v-model="email">
    </div>

    <!-- TODO: Changer son mot de passe -->

    <label for="change-profile-modal" class="btn btn-primary modal-button mb-10">Enregistrer</label> 
</div>

</template>

<script>
export default {
    name: "UserSettingsAccount",
    props: {
        email: {  },
    },
    setup() {
        
    }, 
}

</script>