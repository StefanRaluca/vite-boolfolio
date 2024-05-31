<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNav,
    ProjectCard,
    AppFooter
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


  <AppNav />

  <AppFooter />

</template>

<style></style>
