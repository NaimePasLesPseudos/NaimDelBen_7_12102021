<template>
<div class="post border-2 bg-base-100 p-5 mb-10 rounded-box">
    <router-link :to="'/user/' + userId"><p class="text-xs mb-2 text-">Publié par {{ userName }}, le {{ date }}</p></router-link>
    <router-link :to="'/post/' + id"><h2 class="text-xl mb-2"> {{ title }} </h2></router-link>
    <p> {{ content }} </p>

    <div class="flex justify-between mt-5">
        <div class="btn-group ">
            <button class="btn btn-outline btn-sm tooltip" data-tip="Commentaires">
                <router-link :to="'/post/' + id "> 
                💬 : {{ comments }}
                </router-link>
            </button> 
            <button 
                :class="{ 'btn-active': isActive }"
                class="btn btn-outline btn-sm tooltip"
                data-tip="Pouce en l'air"
                @click="newReaction(1, id)"
            >
                👍 : {{ thumbs }}
            </button> 
            <button
                :class="{ 'btn-active': isActive }"
                class="btn btn-outline btn-sm tooltip"
                data-tip="J'adore"
                @click="newReaction(2, id)"
            >
                💕 : {{ hearts }}
            </button>       
            <button
                :class="{ 'btn-active': isActive }"
                class="btn btn-outline btn-sm tooltip"
                data-tip="Du génie"
                @click="newReaction(3, id)"
            >
                💡 : {{ lightBulbs }}
            </button>       
            <button
                :class="{ 'btn-active': isActive }"
                class="btn btn-outline btn-sm tooltip"
                data-tip="Je me roule par terre"
                @click="newReaction(4, id)"
            >
                🤣 : {{ rofls }}
            </button> 
        </div> 
        <div class="btn-group" v-if="userId === user.id || user.role === 'admin'" >
            <router-link :to="'/modify/' + id" class="btn btn-outline btn-sm tooltip" data-tip="Modifier">
                🔄
            </router-link>
            <label v-bind:for="'modal-delete-post' + id" class="btn btn-outline btn-sm tooltip" data-tip="Supprimer">❌</label>
        </div>
    </div>
</div>
    <input type="checkbox" v-bind:id="'modal-delete-post' + id" class="modal-toggle"> 
<div class="modal">
    <div class="modal-box">
        <p>Êtes-vous sûr de vouloir supprimer cette publication ? <br>
        ⛔️ Cette action est irréversible ! ⛔️</p> 
        <div class="modal-action">
            <label v-bind:for="'modal-delete-post' + id" class="btn btn-warning" @click="removePost(id)">Supprimer</label> 
            <label v-bind:for="'modal-delete-post' + id" class="btn">Annuler</label>
        </div>
    </div>
</div> 
</template>

<script>
import { deletePost } from '@composable/usePostRepository'
import { addReaction } from '@composable/useReactionRepository'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

export default {
    name: "Post",
    emits: ['deleted'],
    props: {
        date: { required: true },
        id: { type: Number },
        title: { type: String, required: true },
        userName: { type: String, required: true },
        userId: { type: Number },
        content: { type: String, required: true },
        comments: { type: String, default: "0" },
        thumbs: { type: String, default: "0" },
        lightBulbs: { type: String, default: "0" },
        rofls: { type: String, default: "0" },
        hearts: { type: String, default: "0" }
    },
    async setup(props, { emit }) {
        const router = useRouter()
            , store = useStore()
            , toast = useToast()
            , user = computed(() => store.state.auth.user)

        async function removePost(id) {
            try {
                await deletePost(id)
                toast.success('Article supprimé !')
                emit('deleted', id)
            } catch (e) {
                return
            }
        }
        async function newReaction(react_id, post_id) {
            try {
                await addReaction(react_id, post_id, user.value.id)
                router.go(router.currentRoute)
            } catch (e) {
                return
            }
        }

        return {
            removePost,
            newReaction,
            user,
            isActive: false
        }
    }
}
</script>