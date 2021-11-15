<template>
<span v-if="loading">
            CHARGEMENT DE L'ARTICLE...........
</span>
<h1 class="flex justify-center text-lg mt-10">Modification de l'article : </h1>
<div class="flex-col mx-10">
    <div class="p-5">
        <div class="form-control">
            <input
                class="input input-bordered mb-2"
                placeholder="Écrivez votre titre ici..."
                type="text"
                v-model="post.title"
            >
            <textarea 
                class="textarea h-80 textarea-bordered"
                placeholder="Écrivez votre texte ici..."
                type="text"
                v-model="post.content"
            ></textarea>
            <div class="flex justify-between">
                <button
                    class="btn btn-secondary flex-1 mt-2 mb-10 mr-1"
                    @click="updateThisPost"
                >
                    Modifier l'Article
                </button>
                <button
                    class="btn btn-primary mt-2 mb-10"
                    @click="abortUpdate"
                >
                    Annuler la modification
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { usePostRepository } from '@composable/usePostRepository'
import { toRaw }from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'

export default {
    name: "modifyPost",
    async setup() {
        const router = useRouter()
            , route = useRoute()
            , toast = useToast()
            , actualPost = parseInt(route.params.id)
            , { post, posts, loading, fetchOnePost: findOnePost, updatePost } = usePostRepository()

        findOnePost(actualPost)

        let data = toRaw(post)

        async function updateThisPost() {
            try {
                await updatePost(actualPost, data)
                toast.success('Article modifié !')
                router.push({path: `/post/${actualPost}`})
            } catch (err) {
                toast.error('Retente, ça fonctionne pas.')
                return
            }
        }

        function abortUpdate() {
            toast.warning('Annulation de la modification !')
            router.push({path: `/post/${actualPost}`})
        }

        return{
            post,
            posts,
            loading,
            updateThisPost,
            abortUpdate
        }
    }
}
</script>