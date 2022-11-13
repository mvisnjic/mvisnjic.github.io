import { createRouter, createWebHistory } from 'vue-router'
import indexPage from '../views/indexScreen.vue'
const routes = [
    {
        path: '/',
        name: 'indexPage',
        component: indexPage,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router