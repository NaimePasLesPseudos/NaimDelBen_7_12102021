import  { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Post from '@/views/Post.vue'
import Profil from '@/views/Profil.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/login', name: 'Login', component: Login},
    {path: '/signup', name: 'Signup', component: Signup},
    {path: '/profil', name: 'Profil', component: Profil},
    {path: '/post', name: 'Post', component: Post}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router