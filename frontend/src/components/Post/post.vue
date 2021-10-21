<template>
<div class="post border-2 bg-base-100 p-5 mb-10 rounded-box">
    <p class="text-xs mb-2 text-">Publié par {{ userName }} il y a {{ date }}</p>
    <router-link :to="'/post/' + id"><h2 class="text-xl mb-2"> {{ title }} </h2></router-link>
    <p> {{ content }} </p>

    <div class="flex justify-between mt-5">
        <div class="btn-group ">
            <button class="btn btn-outline btn-sm tooltip" data-tip="Commentaires">
                <router-link :to="'/post/' + id"> 
                💬 : {{ comments }}
                </router-link>
            </button> 
            <button class="btn btn-outline btn-sm tooltip" data-tip="Pouce en l'air" @click="thumbs++">
                👍 : {{ thumbs }}
            </button> 
            <button class="btn btn-outline btn-sm tooltip" data-tip="J'adore" @click="hearts++">
                💕 : {{ hearts }}
            </button>       
            <button class="btn btn-outline btn-sm tooltip" data-tip="Du génie" @click="lightBulbs++">
                💡 : {{ lightBulbs }}
            </button>       
            <button class="btn btn-outline btn-sm tooltip" data-tip="Je me roule par terre" @click="rofls++">
                🤣 : {{ rofls }}
            </button> 
        </div> 
            <label for="delete-modal" class="btn btn-outline btn-sm tooltip" data-tip="Supprimer">❌</label>
    </div>
</div>

<input type="checkbox" id="delete-modal" class="modal-toggle"> 
<div class="modal">
  <div class="modal-box">
    <p>Êtes-vous sûr de vouloir supprimer cette publication ? <br>
    ⛔️ Cette action est irréversible ! ⛔️</p> 
    <div class="modal-action">
      <label for="delete-modal" class="btn btn-warning">Supprimer</label> 
      <label for="delete-modal" class="btn">Annuler</label>
    </div>
  </div>
</div> 
</template>

<script>
export default {
    name: "Post",
    props: {
        date: {
            required: true
        },
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