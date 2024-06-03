<script>
import axios from 'axios';

export default {
    name: 'ProjectDetail',
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            project: {},
            loading: true,
            error: null
        };
    },
    methods: {
        projectDetails() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then(response => {
                    if (response.data.success) {
                        this.project = response.data.project;
                        this.loading = false;
                    } else {
                        this.error = response.data.message;
                        this.loading = false;
                    }
                })
                .catch(error => {
                    this.error = 'Not found';
                    this.loading = false;
                });
        }
    },
    mounted() {
        this.projectDetails();
    }
}
</script>



<template>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
    </div>
</template>



<style scoped></style>