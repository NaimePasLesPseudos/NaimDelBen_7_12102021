<template>

<div class="flex-col mx-10">
    <div class="p-5">
        <div class="form-control">
            <input
                class="input input-bordered mb-2"
                placeholder="Écrivez votre titre ici..."
                type="text"
                v-model="title"
            >
            <div v-if="titleError" class="alert alert-warning mt-2">
                <span>{{titleError}}</span>
            </div>
            <textarea 
                class="textarea h-40 textarea-bordered"
                placeholder="Écrivez votre texte ici..."
                type="text"
                v-model="content"
            >
            </textarea>
            <div v-if="contentError" class="alert alert-warning mt-2">
                <span>{{contentError}}</span>
            </div>
            <div class="flex justify-between">
            <button class="btn btn-secondary mt-2" @click="addNewPost">Publier</button>
            <button class="btn btn-primary mt-2" @click="abort">Annuler</button>
            </div>
        </div>
    </div>
</div>
</template>

<script >
import { addPost } from '@composable/usePostRepository'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export default {
    async setup() {
        const router = useRouter()
            , store = useStore()
            , toast = useToast()
            , author = computed(() => store.state.auth.user)
        
        const schema = yup.object({
            title: 
                yup
                .string()
                .required('Titre obligatoire !')
                .max(250, "Veuillez réduire votre titre. Merci."),
            content: 
                yup
                .string()
                .required('Veuillez rentrer du contenu svp.')
        })

        const { errors, handleSubmit, validate } = useForm({
            validationSchema: schema
        })

        const { value: title, errorMessage: titleError } = useField('title')
        const { value: content, errorMessage: contentError } = useField('content')

        const addNewPost = handleSubmit(async () => {
            const { valid, errors } = await validate()
            if (valid === false) {
                console.log('c\'est non !');
            } else {
                try {
                    await addPost(content.value, title.value, author.value.id)
                    toast.success('Article ajouté correctement !')
                    router.push('/')
                } catch (error) {
                    console.log(error)
                }
            }
        })

        function abort() {
            toast.warning('Annulation du nouvel article !')
            router.push('/')
        }

        return {
            content,
            contentError,
            title,
            titleError,
            addNewPost,
            abort
        }
    },
}
</script>
