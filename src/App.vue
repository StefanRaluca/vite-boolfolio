<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import AppNav from './components/AppNav.vue';

export default {
  name: 'App',
  components: {
    AppNav,
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
  <div id="app">

    <AppNav />
    <ProjectCard :projects="projects" :loading="loading" :api_url="api_url" />
  </div>

</template>

<style></style>
