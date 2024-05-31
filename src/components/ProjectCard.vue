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
    },
    api_url: {
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
    <div v-else class="row">
      <div v-for="project in projects.data" class="col-3">
        <div class="card ">
          <div class="card-body">
            <h2>{{ project.title }}</h2>
            <img v-if="project.image_cover && api_url"
              :src="project.image_cover.startsWith('http') ? project.image_cover : api_url + 'storage/' + project.image_cover"
              class="img_projects" alt="">

            <!-- <p>{{ project.description }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.img_projects {
  width: 100%;
}
</style>
