import { createWebHistory, createRouter } from 'vue-router'

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppContacts from "./pages/AppContacts.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },

        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        }
    ]
})


export default router;