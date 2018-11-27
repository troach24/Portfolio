<template>
  <q-layout-header reveal>
    <q-toolbar color="blue-9" :inverted="$q.theme === 'ios'">
      <q-btn
        flat
        dense
        round
        @click="toggleDrawer()"
        aria-label="Menu"
      >
        <q-icon name="menu" />
      </q-btn>
      <router-link id="home-link" to="/">
        <q-toolbar-title>
          Travis Roach
          <div slot="subtitle">Full Stack Web Developer - Denver, CO</div>
        </q-toolbar-title>
      </router-link>
    </q-toolbar>
  </q-layout-header>
</template>

<script>
export default {
  props: {
    leftDrawerOpen: Boolean,
  },
  methods: {
    toggleDrawer() {
      this.$emit('open-drawer');
    },
  },
};
</script>

<style scoped>

</style>
