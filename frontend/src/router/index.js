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
import Submit from '@views/Submit.vue'
import Modify from '@views/Modify.vue'
import Search from '@views/Search.vue'

const publicRoute = ['Login', 'Signup'],
    routes = [
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
                {path: '/submit', name: 'Submit', component: Submit},
                {path: '/search', name: 'Search', component: Search},
                {path: '/modify/:id', name: 'Modify', component: Modify},
            ]
        },
        {path: '/login', name: 'Login', component: Login},
        {path: '/signup', name: 'Signup', component: Signup},
    ]

export function createRouterWithStore(store) {

    const router = createRouter({
        history: createWebHistory(),
        routes
    })
    
    router.beforeEach((to, from, next) => {
        if (publicRoute.includes(to.name)) {
            next()
            return
        }
    
        if (!store.getters['auth/isConnected']) {
            router.replace({ name: 'Login' })
            return
        }
    
        next()
    })

    return router
}