import { createWebHistory, createRouter } from 'vue-router'

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppContacts from "./pages/AppContacts.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";

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
        },
        {
            path: '/project/:slug',
            name: 'ProjectDetail',
            component: ProjectDetail,
            props: true
        }
    ]
})


export default router;