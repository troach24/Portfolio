<template>
  <q-page class="flex flex-center">
      <!-- class="fixed-top-left absolute-top-left" -->
    <q-btn
      v-if="$q.platform.is.desktop"
      rounded
      outline
      v-go-back=" '/' "
      color="black"
      label="Back"
    />
    <q-btn
      v-if="$q.platform.is.mobile"
      class="q-mt-lg"
      rounded
      outline
      v-go-back=" '/' "
      color="black"
      label="Back"
    />
    <Project v-if="$q.platform.is.desktop"/>
    <ProjectiOS v-if="$q.platform.is.mobile"/>
  </q-page>
</template>

<script>
import Project from '../components/Project';
import ProjectiOS from '../components/ProjectiOS';

export default {
  name: 'PageProjects',
  components: {
    Project,
    ProjectiOS,
  },
};
</script>
