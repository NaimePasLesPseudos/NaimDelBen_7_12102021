<template>
    <Suspense>
        <Header></Header>
    </Suspense>
    
    <Suspense>
        <main>
            <RouterView></RouterView>
        </main>
    </Suspense>
    
    <Footer></Footer>
</template>

<script setup>
import Header from '@components/Header.vue'
import Footer from '@components/Footer.vue'
</script>