<template>
    <Header></Header>
    <main class="grid-container gap-y-20 sm:gap-y-25 lg:gap-y-30">
        <NuxtPage></NuxtPage>
    </main>
    <!-- <Footer></Footer> -->    
</template>

<script setup>
useHead({
    htmlAttrs: {
        lang: 'ru'
    },
})
</script>
