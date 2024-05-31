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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar_brand d-flex align-items-center" :to="{ name: 'home' }">
                <h1>Logo</h1>

            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
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

<style>
.nav-link {
    font-size: 16px;
    padding: 10px 15px;
}

.nav-link:hover {
    background-color: #4586c723;
    border-radius: 5px;
}
</style>