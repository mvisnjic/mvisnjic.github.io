<template>
    <div class="flex flex-col justify-between bg-fixed bg-cover bg-[url('/back3.png')] bg-gray-700 bg-blend-multiply h-full">
        <AppHeader />
        <router-view />
        <AppFooter />
    </div>
</template>

<style scoped>
</style>

<script>
import AppHeader from '/src/components/appHeader.vue'
import AppFooter from '/src/components/appFooter.vue'
export default {
    components: {
        AppHeader,
        AppFooter,
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");

#app {
    letter-spacing: 0.05em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
}
</style>>