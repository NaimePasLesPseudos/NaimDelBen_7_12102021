<template>
<div class="p-5 mb-5">
    <p class="text-xs my-2 text-"> Par : {{ userName }}, le {{ date }}</p>
    <!-- <p class="text-xs my-2 text-" v-show="date === updateDate"> Modifié, le {{ updateDate }}</p> -->
    <p> {{ content }} </p>

    <div class="flex justify-between mt-2">
        <div class="btn-group">
            <!-- <button class="btn btn-outline btn-xs tooltip" data-tip="Commentaires">
                💬 : {{ comments }}
            </button> 
            <button id="comment" class="btn btn-outline btn-xs tooltip" data-tip="Répondre à ce commentaire" @click="toggleCommentArea">
                <router-link :to="'/post/' + id"> 
                répondre
                </router-link>
            </button>  -->
            <button class="btn btn-outline btn-xs tooltip" data-tip="Pouce en l'air" @click="thumbs++">
                👍 : {{ thumbs }}
            </button> 
            <button class="btn btn-outline btn-xs tooltip" data-tip="J'adore" @click="hearts++">
                💕 : {{ hearts }}
            </button>       
            <button class="btn btn-outline btn-xs tooltip" data-tip="Du génie" @click="lightBulbs++">
                💡 : {{ lightBulbs }}
            </button>       
            <button class="btn btn-outline btn-xs tooltip" data-tip="Je me roule par terre" @click="rofls++">
                🤣 : {{ rofls }}
            </button> 
        </div> 
        <div v-if="userId === user.id || user.role === 'admin'">
            <label v-bind:for="'modal-delete-comment' + id" class="btn btn-outline btn-xs tooltip" data-tip="Supprimer">❌</label>
        </div>
    </div>
</div>

<input type="checkbox" v-bind:id="'modal-delete-comment' + id" class="modal-toggle"> 
<div class="modal">
    <div class="modal-box">
        <p>Êtes-vous sûr de vouloir supprimer ce commentaire ? <br>
        ⛔️ Cette action est irréversible ! ⛔️ </p> 
        <div class="modal-action">
            <label v-bind:for="'modal-delete-comment' + id" class="btn btn-warning" @click="removeComment(id)" >Supprimer</label>
            <label v-bind:for="'modal-delete-comment' + id" class="btn">Annuler</label>
        </div>
    </div>
</div> 
</template>

<script>
import { useCommentRepository } from '@composable/useCommentRepository'
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

export default {
    name: "Comments",
    props: {
        date: { required: true },
        updateDate: { required: true },
        id: { type: Number },
        userName: { type: String, required: true },
        userId: { type: Number },
        content: { type: String, required: true },
        comments: { type: String, default: "0" },
        thumbs: { type: String, default: "0" },
        lightBulbs: { type: String, default: "0" },
        rofls: { type: String, default: "0" },
        hearts: { type: String, default: "0" }
    },
    setup() {
        const router = useRouter()
            , route = useRoute()
            , store = useStore()
            , toast = useToast()
            , actualPost = parseInt(route.params.id)
            , user = computed(() => store.state.auth.user)
            , { deleteComment } = useCommentRepository()
            
        async function removeComment(id) {
            try {
                await deleteComment(id)
                toast.success('Commentaire supprimé !')
                // router.push({path: `/post/${actualPost}`})
            } catch (error) {
                toast.error('Retente, ça fonctionne pas.')
                return
            }
        }

            // , commentArea = ref(false)
            // , toggleCommentArea = () => {
            //     commentArea.value = !commentArea.value
            // }
        
        return {
            user,
            actualPost,
            // commentArea,
            // toggleCommentArea,
            removeComment
        }
    }, 
}

</script>