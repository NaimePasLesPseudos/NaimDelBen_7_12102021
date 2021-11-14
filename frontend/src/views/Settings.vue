<template>

<div class="mx-10 lg:w-1/2 ">
    <span v-if="loading">
        CHARGEMENT DU PROFIL...........
    </span>
<div class="ml-5">
    <h1>Paramètres du profil : </h1>

    <form
        id="settings"
        @submit.prevent="updateProfile"
        action="changeSettings"
        method="POST"
    >

        <div class="form-control my-5">
            <label class="label">
                <span class="label-text">
                    Modifier mon nom :
                </span>
            </label> 
            <input
                v-model="user.name"
                type="text"
                placeholder="Nom"
                class="input input-bordered"
            > 
        </div>

        <div class="form-control my-5">
            <label class="label">
                <span class="label-text">
                    Changer ma présentation : 
                </span>
            </label> 
            <textarea
                v-model="user.bio"
                class="textarea h-24 textarea-bordered"
                placeholder="Bio"
            >
            </textarea>
        </div>

        <div class="form-control my-5">
            <label class="label">
                <span class="label-text">
                    Changer ma photo de profil :
                </span>
            </label> 
            <input
                v-model="user.picture"
                type="text"
                placeholder="Picture"
                class="input input-bordered"
            >
        </div>

        <div class="form-control my-5">
            <label class="label">
                <span class="label-text">
                    Changer mon fond de profil :
                </span>
            </label> 
            <input
                v-model="user.background"
                type="text"
                placeholder="Background"
                class="input input-bordered"
            >
        </div>

        <div class="form-control my-5">
            <label class="label">
                <span class="label-text">
                    Changer mon mail :
                </span>
            </label> 
            <input
                v-model="user.email"
                type="text"
                placeholder="Mail"
                class="input input-bordered"
            >
        </div>
        

        <!-- <div class="form-control my-5">
            <label class="label">
                <span class="label-text">
                    Changer mon mot de passe :
                </span>
            </label> 
            <input
                v-model="password"
                type="text"
                placeholder="Nouveau mot de passe"
                class="input input-bordered"
            >
        </div> -->

        

        <label class="btn btn-primary modal-button mb-10" for="change-profile-modal">Enregistrer</label> 
</form>

    <div>
        <label class="btn btn-error btn-xs my-5" for="delete_account_modal">
            Supprimer le compte !
        </label>
    </div>

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

<input type="checkbox" id="delete_account_modal" class="modal-toggle"> 
<div class="modal">
    <div class="modal-box">
        <h2>Suppression de mon compte Groupomania</h2>
        <p>Souhaitez-vous vraiment supprimer votre compte ? Impossible de revenir en arrière</p> 
        <div class="modal-action">
            <label for="delete_account_modal" class="btn btn-warning" @click="deleteProfile">Oui, supprimer mon compte</label> 
            <label for="delete_account_modal" class="btn btn-outline">Annuler</label>
        </div>
    </div>
</div>

</template>

<script>
import { useUserRepository } from '@composable/useUser'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { computed, toRaw } from 'vue'

export default {
    components: { },
    name: "Settings",
    async setup() {
        const store = useStore()
            , router = useRouter()
            , toast = useToast()
            , currentUserId = computed(() => store.getters['auth/userId'])
            , { user, loading, searchUser: findMe, updateMe } = useUserRepository()
            
        findMe(currentUserId.value.id)

        let me = toRaw(user)

        async function updateProfile() {
            try {
                console.log(me);
                await updateMe(currentUserId.value.id, me)
                toast.success('Profil modifié avec succès !')
                router.push({path: `/user/${currentUserId.value.id}`})
            } catch (e) {
                console.log(e)
            }
        }

        return {
            user,
            loading,
            currentUserId,
            updateProfile,
            }
    },
}
</script>