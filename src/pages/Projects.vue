<template>
  <q-page class="flex flex-center animate-scale">
    <q-btn
      class="q-mt-lg"
      rounded
      outline
      v-go-back=" '/' "
      color="blue-9"
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
