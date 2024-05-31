import { createWebHistory, createRouter } from 'vue-router'

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
            component: Appabout
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