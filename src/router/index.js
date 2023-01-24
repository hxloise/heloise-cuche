import { createRouter, createWebHistory } from "vue-router";

import TheHome from "../components/TheHome.vue";
import TheAbout from "../components/TheAbout.vue";
import TheBlog from "../components/TheBlog.vue";
import TheOrganiz from "../components/TheOrganiz.vue";
import TheNotFound from "../components/TheNotFound.vue";

const routes = [
    {
        path: '/',
        name: 'Accueil',
        component: TheHome
    },
    {
        path: '/a-propos',
        name: 'À propos',
        component: TheAbout
    },
    {
        path: '/blog',
        name: 'Blog',
        component: TheBlog
    },
    {
        path: '/organiz',
        name: "Organiz",
        component: TheOrganiz
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: TheNotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    history: true,
    routes
})

export default router;