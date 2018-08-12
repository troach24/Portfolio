<template>
  <q-page class="flex flex-center">
      <!-- class="fixed-top-left absolute-top-left" -->
    <q-btn
      rounded
      outline
      v-go-back=" '/' "
      color="black"
      label="Back"
    />
    <Project />
  </q-page>
</template>

<script>
import Project from '../components/Project';

export default {
  name: 'PageProjects',
  components: {
    Project,
  },
};
</script>
