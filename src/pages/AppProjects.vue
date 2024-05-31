<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'AppProjects',
    components: {
        ProjectCard
    },
    data() {
        return {
            api_url: 'http://127.0.0.1:8000/',
            projects_url: 'api/projects',
            projects: [],
            loading: true
        }
    },
    methods: {

        getApi(api_url) {
            axios
                .get(api_url)
                .then(response => {
                    console.log(response);
                    this.projects = response.data.projects
                    this.loading = false
                })
                .catch(error => {
                    console.error(error);
                })
        }
    },
    mounted() {
        let api_url = this.api_url + this.projects_url
        this.getApi(api_url);
    }
}
</script>

<template>
    <div class="container">
        <h1>Projects Page</h1>
        <ProjectCard :projects="projects" :loading="loading" :api_url="api_url" />
    </div>
</template>



<style></style>