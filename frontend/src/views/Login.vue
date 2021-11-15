<template>
<div class="hero min-h-screen bg-primary">
    <div class="flex-col justify-center hero-content lg:flex-row">
        <div class="text-center lg:text-left">
            <h1 class="mb-5 text-5xl font-bold">
                Groupomania - votre réseau social interne !
            </h1> 
            <p class="mb-5">
                Bonjour. Connectez-vous pour entrer dans votre réseau social.
            </p>
        </div> 
        <div class="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
            <div class="card-body">
                <form 
                    id="login"
                    @submit.prevent="signIn"
                    method="post"
                >
                
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text"></span>
                        </label> 
                        <input 
                            id="email"
                            v-model="email"
                            type="email"
                            name="email"
                            placeholder="Adresse e-mail :"
                            class="input input-bordered"
                        >
                        <div v-if="emailError" class="alert alert-warning mt-2">
                            <span>{{emailError}}</span>
                        </div>
                    </div> 

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text"></span>
                        </label> 
                        <input
                            id="password"
                            v-model="password"
                            name="password"
                            type="password"
                            placeholder="Mot de passe :"
                            class="input input-bordered"
                        > 
                        <div v-if="passwordError" class="alert alert-warning mt-2">
                            <span>{{passwordError}}</span>
                        </div>
                    </div> 

                    <div class="form-control mt-6">
                        <button class="btn btn-primary" type="submit">
                            Se connecter
                        </button>

                        <label class="label">
                        <a href="#" class="label-text-alt">Mot de passe oublié ?</a>
                        </label>
                    </div>

                </form>

                <div >
                    <div class="divider">ou</div> 
                    <router-link to="/signup">
                        <button class="btn btn-info btn-block">
                            Créer un nouveau compte
                        </button> 
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>

<Footer>
</Footer>
</template>

<script>
import Footer from '@components/Footer.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export default {
    name: "Login",
    components: { Footer },
    setup() {
        const store = useStore()
            , router = useRouter()
            
        const loggedIn = computed(() => store.state.auth.status.loggedIn)
        if (loggedIn) {
            router.push('/')
        }

        const schema = yup.object({
            email: 
                yup
                .string()
                .email('Veuillez rentrer un email valide')
                .required('Email obligatoire !')
                .max(250, "Veuillez réduire votre mail"),
            password: 
                yup
                .string()
                .min(8, 'minimum 8')
                .max(250, "Veuillez réduire votre mot de passe")
                .required('Mot de passe obligatoire !')
        })

        const { errors, handleSubmit, validate } = useForm({
            validationSchema: schema
        })

        const { value: email, errorMessage: emailError } = useField('email')
        const { value: password, errorMessage: passwordError } = useField('password')

        const signIn = handleSubmit(async () => {
            const { valid, errors } = await validate()
            if (valid === false) {
                console.log('c\'est non !');
            } else {
                try {
                    const userSign = {
                        email: email.value, 
                        password: password.value
                    }
                    await store.dispatch("auth/signIn", userSign)
                    router.go("/")
                } catch (error) {
                    console.log(error)
                }
            }
        })

        return {
            email,
            emailError,
            password,
            passwordError,
            signIn,
            loggedIn,
        }
    }
}
</script> 