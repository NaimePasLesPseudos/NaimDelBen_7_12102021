<template>

<div class="mx-10 w-1/2 ">
    <div class="tabs mb-10">
        <a class="tab tab-lifted tab-lg tab-active">Profile</a> 
        <a class="tab tab-lifted tab-lg">Group</a> 
        <a class="tab tab-lifted tab-lg">Others</a>  
    </div>

    <div class="ml-5">
        <h1>Paramètres du profil</h1>

        <div class="form-control my-5">
            <label class="label">
            <span class="label-text">Modifier mon nom :</span>
            </label> 
            <input type="text" placeholder="Nom" class="input input-bordered" v-model="user.name">
        </div>


        <div class="form-control my-5">
            <label class="label">
            <span class="label-text">Changer mon mail :</span>
            </label> 
            <input type="text" placeholder="Mail" class="input input-bordered" v-model="user.email">
        </div>

        <div class="form-control my-5">
            <label class="label">
            <span class="label-text">Changer ma phrase de présentation : </span>
            </label> 
            <textarea class="textarea h-24 textarea-bordered" placeholder="Bio" v-model="user.bio"></textarea>
        </div>

        <label for="change-profile-modal" class="btn btn-primary modal-button mb-10">Enregistrer</label> 
    </div>
</div>

<input type="checkbox" id="change-profile-modal" class="modal-toggle"> 
<div class="modal">
    <div class="modal-box">
        <p>Souhaitez-vous apporter les modifications demandées ?</p> 
        <div class="modal-action">
            <label for="change-profile-modal" class="btn btn-success" @click="updateProfile">Modifier mon profil</label> 
            <label for="change-profile-modal" class="btn">Annuler</label>
        </div>
    </div>
</div>

</template>

<script setup>
import GroupomaniaData from '../services/Data'
</script>

<script>
// TODO : Rajouter la possibilité de changer sa photo
export default {
    name: "Settings",
    data() {
        return {
            user: []
        }
    },
    methods: {
        searchUser() {
            // TODO: id doit venir du JWT
            GroupomaniaData.getUser(8)
            .then((result) => {
                this.user = result.data
                console.log(result.data)
            }).catch((err) => {
                console.log(err)
            });
        },
        updateProfile() {
            GroupomaniaData.updateUser(8, this.user)
        }
    },
    mounted() {
        this.searchUser()
    }
}
</script>
