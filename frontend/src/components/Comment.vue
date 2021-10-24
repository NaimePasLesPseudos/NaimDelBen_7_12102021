<template>
<div class="p-5 mb-5">
    <p class="text-xs my-2 text-"> {{ avatar}} {{ userName }},  il y a {{ date }}</p>
    <p> {{ content }} </p>

    <div class="flex justify-between mt-2">
        <div class="btn-group">
            <button class="btn btn-outline btn-xs tooltip" data-tip="Commentaires">
                💬 : {{ comments }}
            </button> 
            <button id="comment" class="btn btn-outline btn-xs tooltip" data-tip="Répondre à ce commentaire" @click="toggleCommentArea">
                <!-- <router-link :to="'/post/' + id">  -->
                répondre
                <!-- </router-link> -->
            </button> 
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
            <label for="delete-comment-modal" class="btn btn-outline btn-xs tooltip" data-tip="Supprimer">❌</label>
    </div>

    <div v-if="commentArea" class="pt-5">
        <div class="form-control">
        <textarea class="textarea h-24 textarea-bordered" placeholder="Écrivez votre commentaire ici..."></textarea>
        <button class="btn btn-primary mt-2">Commenter</button>
        </div>
    </div>
</div>

<input type="checkbox" id="delete-comment-modal" class="modal-toggle"> 
<div class="modal">
    <div class="modal-box">
        <p>Êtes-vous sûr de vouloir supprimer ce commentaire ? <br>
        ⛔️ Cette action est irréversible ! ⛔️ </p> 
        <div class="modal-action">
            <label for="delete-comment-modal" class="btn btn-warning">Supprimer</label> 
            <label for="delete-comment-modal" class="btn">Annuler</label>
        </div>
    </div>
</div> 
</template>

<script>
import { ref } from 'vue'

export default {
    name: "Comments",
    props: {
        date: { required: true },
        id: { type: Number },
        title: { type: String, required: true },
        userName: { type: String, required: true },
        content: { type: String, required: true },
        comments: { type: Number, default: 0 },
        thumbs: { type: Number, default: 0 },
        lightBulbs: { type: Number, default: 0 },
        rofls: { type: Number, default: 0 },
        hearts: { type: Number, default: 0 }
    },
    setup() {
        const commentArea = ref(false)
        const toggleCommentArea = () => {
            commentArea.value = !commentArea.value
        }
        return {
            commentArea,
            toggleCommentArea
        }
    }, 
}

</script>