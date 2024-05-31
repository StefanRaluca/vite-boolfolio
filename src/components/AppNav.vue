<script>

import { RouterView } from 'vue-router';
export default {
    name: 'AppNav',
    components: {
        RouterView
    },
    data() {
        return {
        }
    }

}
</script>

<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
            <router-link class="navbar-brand" :to="{ name: 'home' }">Navbar</router-link>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'projects' }">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'contacts' }">Contacts</router-link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>

    <RouterView />
</template>

<style></style>