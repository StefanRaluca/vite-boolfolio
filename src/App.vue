<script>
import axios from 'axios';

export default {
  name: 'App',
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

</template>

<style></style>
