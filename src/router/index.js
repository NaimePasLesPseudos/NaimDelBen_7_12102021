import  { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Settings from '@/views/Settings.vue'
import User from '@/views/User.vue'
import Post from '@/views/Post.vue'
import Likes from '@/views/Likes.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/login', name: 'Login', component: Login},
    {path: '/signup', name: 'Signup', component: Signup},
    {path: '/settings', name: 'Settings', component: Settings},
    {path: '/user/:id', name: 'User', component: User},
    {path: '/post/:id', name: 'Post', component: Post},
    {path: '/likes', name: 'Likes', component: Likes},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

// TODO:
// [ ] Page 404