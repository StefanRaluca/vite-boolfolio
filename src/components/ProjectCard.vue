<script>
export default {
  name: 'ProjectCard',
  props: {
    projects: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {

  },

}


</script>



<template>
  <div>
    <h1>Projects</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="project in projects">
        <h2>{{ project.title }}</h2>

        <!--  <img v-if="project.cover_image.startsWith('uploads')" :src="api_url + 'storage/' + project.cover_image" alt=""> -->

        <!--     <img v-else :src="project.cover_image" alt=""> -->

        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>

</template>

<style></style>
