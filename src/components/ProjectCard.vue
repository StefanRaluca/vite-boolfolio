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
    <div v-if="loading" class="text-center my-5">
      <div class="text-primary" role="status">
        <span>Loading...</span>
      </div>
    </div>
    <div v-else class="row">
      <div v-for="project in projects.data" class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 ">
          <img v-if="project.image_cover && api_url"
            :src="project.image_cover.startsWith('http') ? project.image_cover : api_url + 'storage/' + project.image_cover"
            class="card-img-top img_projects" alt="">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
          </div>
          <div class="card-footer">
            <!--    <a :href="project.url_code" class="btn btn-primary">View Project</a>
            User {{ $route.params.id }} -->
            <router-link :to="{ name: 'ProjectDetail', params: { slug: project.slug } }" class="btn btn-primary">
              View Project
            </router-link>
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
