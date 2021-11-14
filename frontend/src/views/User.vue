<template>
    <div class="m-10 flex flex-col">
        <template v-if="!user">Chargement...</template>
        <template v-else class="">
            <UserCard
                :name="user.name"
                :avatar="user.picture"
                :bio="user.bio"
                :background="user.background"
                :role="user.role"
            ></UserCard>
    
            <div v-if="admin.role === 'admin'" class="text-center">
                <label class="btn btn-warning mt-10" for="modal-delete-user"> Supprimer ce compte !</label>
            </div>
    
            <UserStats
                :posts="user.NumberOfPosts"
                :comments="user.NumberOfComments"
            ></UserStats>
            <div class="lg:flex justify-between items-start">
                <div class="border-2 bg-base-100 rounded-box p-5 mt-10">
                    <h2 class="text-lg">Historique des articles :</h2>
                    <UserFluxPosts
                        v-for="post in user.posts.slice().reverse()"
                        :key="post.id"
                        :postId="post.id"
                        :postTitle="post.title"
                        :postPublished="dateReturn(post.published)"
                    ></UserFluxPosts>
                </div>
                <div class="border-2 bg-base-100 rounded-box p-5 my-10 flex-1">
                    <h2 class="text-lg">Historique des commentaire :</h2>
                    <UserFluxComments
                        v-for="comment in user.comments.slice().reverse()"
                        :key="comment.id"
                        :commentPostId="comment.post_id"
                        :commentPublished="dateReturn(comment.published)"
                        :commentContent="comment.content"
                    ></UserFluxComments>
                </div>
            </div>
        </template>
    </div>

<input type="checkbox" id="modal-delete-user" class="modal-toggle"> 
<div class="modal">
    <div class="modal-box">
        <p>Êtes-vous sûr de vouloir supprimer cette publication ? <br>
        ⛔️ Cette action est irréversible ! ⛔️</p> 
        <div class="modal-action">
            <label for="modal-delete-user" class="btn btn-warning" @click="deleteUser()">Supprimer</label> 
            <label for="modal-delete-user" class="btn">Annuler</label>
        </div>
    </div>
</div>     
</template>

<script>
import UserCard from '@components/UserProfileCard.vue'
import UserStats from '@components/UserProfileStats.vue'
import UserFluxPosts from '@components/UserProfileFluxPosts.vue'
import UserFluxComments from '@components/UserProfileFluxComments.vue'
import { searchUserWithHistory, destroyUser } from "@composable/useUser"
import { dateTime } from '@composable/date'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

export default {
    components: { UserCard, UserStats, UserFluxPosts, UserFluxComments },
    async setup() {
        const route = useRoute()
            , store = useStore()
            , router = useRouter()
            , toast = useToast()
            , { user } = await searchUserWithHistory(route.params.id)
            , admin = computed(() => store.state.auth.user)
        
        function dateReturn(dateValue) {
            try {
                const res = dateTime(dateValue)
                return res.dateReturn
            } catch (error) {
                return error
            }
        }

        function deleteUser() {
            try {
                destroyUser(route.params.id)
                toast.success('Suppression du compte réussie !')
                router.go('/')
            } catch (error) {
                return error
            }
        }

        return {
            user,
            admin,
            dateReturn,
            deleteUser
        }
    }
}
</script>