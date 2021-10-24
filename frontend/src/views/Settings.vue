<template>

<div class="mx-10 w-1/2 ">

    <div class="tabs my-10">
        <button
            v-for="tab in tabs"
            v-bind:key="tab"
            v-bind:class="['tab', 'tab-lifted', 'tab-lg', { 'tab-active': currentTab === tab }]"
            v-on:click="currentTab = tab"
        >
            {{ tab }}
        </button>
    </div>

<keep-alive>
    <component 
        :is="currentTabComponent"
        :name="user.name"
        :bio="user.bio"
        :email="user.email"
    ></component>
</keep-alive>

    
</div>

<input type="checkbox" id="change-profile-modal" class="modal-toggle"> 
<div class="modal">
    <div class="modal-box">
        <p>Souhaitez-vous apporter les modifications demandées ?</p> 
        <div class="modal-action">
            <label for="change-profile-modal" class="btn btn-success" @click="updateProfile">Modifier mon profil</label> 
            <label for="change-profile-modal" class="btn">Annuler</label>
        </div>
    </div>
</div>

</template>

<script>
import UserSettingsProfile from '@components/UserSettingsProfile.vue'
import UserSettingsAccount from '@components/UserSettingsAccount.vue'
import { searchUser } from '@composable/useUser'
import { computed, ref } from 'vue'

export default {
    components: { 
        UserSettingsProfile, 
        UserSettingsAccount,
        },
    name: "Settings",
    async setup() {
            // TODO: id doit venir du JWT
        const { user, status, Status } = await searchUser(8)
        const currentTab = ref('Profile')
        const tabs = ['Profile', 'Account']
        const currentTabComponent = computed(() => `UserSettings${currentTab.value}`)
        return { tabs, currentTab, currentTabComponent, user, status, Status }
    },
}
</script>