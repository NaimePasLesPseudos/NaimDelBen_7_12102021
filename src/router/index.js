import  { createRouter, createWebHistory } from 'vue-router'
import Layout from '@views/layouts/Default.vue'
import Home from '@views/Home.vue'
import About from '@views/About.vue'
import Login from '@views/Login.vue'
import Signup from '@views/Signup.vue'
import Settings from '@views/Settings.vue'
import User from '@views/User.vue'
import Post from '@views/Post.vue'
import Likes from '@views/Likes.vue'
import Lost from '@views/404.vue'

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {path: '', name: 'Home', component: Home},
            {path: '/about', name: 'About', component: About},
            {path: '/settings', name: 'Settings', component: Settings},
            {path: '/user/:id', name: 'User', component: User},
            {path: '/post/:id', name: 'Post', component: Post},
            {path: '/likes', name: 'Likes', component: Likes},
            {path: '/lost', name: 'Lost', component: Lost},
        ]
    },
    {path: '/login', name: 'Login', component: Login},
    // {path: '/logout', name: 'Logout', component: Logout},
    {path: '/signup', name: 'Signup', component: Signup},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router