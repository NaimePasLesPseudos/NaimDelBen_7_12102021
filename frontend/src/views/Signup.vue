<template>
<div class="hero min-h-screen bg-accent">
    <div class="flex-col justify-center hero-content lg:flex-row">
        <div class="text-center lg:text-left">
            <h1 class="mb-5 text-5xl font-bold">
                Bienvenue sur Groupomania !
            </h1> 
            <p class="mb-5">
                Bienvenue. Inscrivez-vous pour profiter de votre réseau social.
            </p>
        </div> 
        <div class="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
            <div class="card-body">
                <form 
                    id="signup"
                    @submit.prevent="onRegister"
                    method="post"
                    :validation-schema="schema"
                >
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text"></span>
                        </label> 
                        <input 
                            id="name"
                            v-model="name"
                            name="name"
                            type="text"
                            placeholder="Nom :"
                            class="input input-bordered"
                        >
                        <div v-if="nameError" class="alert alert-warning mt-2">
                            <span>{{nameError}}</span>
                        </div>
                    </div> 

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text"></span>
                        </label> 
                        <input
                            id="email"
                            v-model="email"
                            name="email"
                            type="email"
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
                        <button class="btn btn-accent" type="submit">
                            S'inscrire
                        </button>
                    </div>
                </form>
                <div >
                    <div class="divider">ou</div> 
                    <router-link to="/login">
                        <button class="btn btn-info btn-block">
                            J'ai déjà un compte
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

<script >
import Footer from '@components/Footer.vue'
import { signup } from '@composable/connect.js'
import { computed, reactive, ref, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export default {
    name: "Signup",
    components: { Footer },
    setup() {
        const store = useStore()
            , route = useRouter()

        const loggedIn = computed(() => store.state.auth.status.loggedIn)

        const schema = yup.object({
            name: 
                yup
                .string()
                .required('Le nom est obligatoire')
                .max(250, "Veuillez réduire votre nom"),
            email: 
                yup
                .string()
                .email()
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

        const { value: name, errorMessage: nameError, meta } = useField('name')
        const { value: email, errorMessage: emailError } = useField('email')
        const { value: password, errorMessage: passwordError } = useField('password')

        const onRegister = handleSubmit(async () => {
            const { valid, errors } = await validate()
            if (valid === false) {
                console.log('c\'est non !');
            } else {
                try {
                    const user = {
                        name: name.value, 
                        email: email.value, 
                        password: password.value
                    }
                    console.log(user);
                    console.log(name.value, email.value, password.value);
                    await store.dispatch("auth/register", user)
                    // await signup(name.value, email.value, password.value)
                    // route.push("/")
                } catch (error) {
                    console.log(error)
                }
            }
        })

        return {
            schema,
            name,
            nameError,
            email,
            emailError,
            password,
            passwordError,
            onRegister,
            loggedIn,
        }
    }
}
</script>
